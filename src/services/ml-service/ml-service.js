import _ from 'lodash';
import svgs_ from '@/services/picture-service/svgs';
import moment from 'moment-timezone';

/*
svg.js

categories

fullbody
headgear
gloves
jacket
lowerbody
shoes
upperbody
hair
extra (trunk)
headgear

*/

function getRandomColor(type, category, gender) {
  return _.sample(_.toArray(svgs_).filter(s => s.gender === gender).filter(s => s.category === category).filter(s => s.type === type)).name;
}

function predictType(gender, targetWeather, rawType) {
  function nearest(arr) {
    return arr.reduce((p, c) => {
      const cDiff = Math.abs(c.percentage - targetWeather.target);
      if (cDiff <= p.diff) {
        return { diff: cDiff, svg: c };
      }
      return p;
    }, { diff: Infinity, svg: '' });
  }
  return function pc(category) {
    const genderPieces = _.toArray(svgs_).filter(s => s.gender === gender);
    const categoryPieces = genderPieces.filter(s => s.category === category.name);
    const rainPieces = categoryPieces.filter(s => (_.has(s, 'rainOnly') ? s.rainOnly === true && targetWeather.raining === false : false));
    const rangePieces = rainPieces.filter(
      (s) => {
        if (_.has(s, 'min') && _.has(s, 'max')) {
          const percentVary = _.range(s.min, s.max, 1);
          return _.some(percentVary, p => p >= targetWeather.min && p <= targetWeather.max);
        }
        return s.percentage >= targetWeather.min && s.percentage <= targetWeather.max;
      },
    );
    if (rangePieces.length === 0 || !rangePieces) {
      if (category.omit) {
        return {
          [category.name]: '',
        };
      }
      const selected = nearest(categoryPieces);
      return {
        [category.name]: rawType ? selected.svg.type : getRandomColor(selected.svg.type, category.name, gender),
      };
    }
    const selected = nearest(rangePieces);
    return {
      [category.name]: rawType ? selected.svg.type : getRandomColor(selected.svg.type, category.name, gender),
    };
  };
}

function quantisize(min, max, resolution) {
  const step = (max - min) / resolution;
  const mins = _.range(min, max - (step - 0.2), step);
  const maxs = _.range(min + step, max + (step - 0.2), step);
  const quants = _.zipWith(
    mins,
    maxs,
    (min_, max_) => ({ from: min_, to: max_, avg: (min_ + max_) / 2 }),
  );
  return (point) => {
    const fittingQuants = quants.filter(q => q.from <= point.apparentTemperature && q.to >= point.apparentTemperature);
    if (fittingQuants.length >= 1)
      return fittingQuants[0].avg;
    if (Math.abs(point.apparentTemperature - quants[0]) < Math.abs(point.apparentTemperature - quants[resolution - 1]))
      return quants[0].avg;
    return quants[resolution - 1].avg;
  };
}

function processWeather(weather, timestart, timestop, resolution, tempstart, tempstop) {
  const timeWeather = weather.hourly.data
    .filter(dp => moment.unix(dp.time).isAfter(timestart))
    .filter(dp => moment.unix(dp.time).isBefore(timestop));

  const min = timeWeather
    .map(dp => dp.apparentTemperature)
    .reduce((p, c) => (c < p ? c : p));

  const max = timeWeather
    .map(dp => dp.apparentTemperature)
    .reduce((p, c) => (c > p ? c : p));

  const targetQuants = _.groupBy(timeWeather, quantisize(min, max, resolution));
  const target = _.reduce(
    targetQuants,
    (p, val, key) => (val.length > p.coll.length ? { avg: key, coll: val } : p),
    { avg: null, coll: [] },
  );

  const squish = percent => Math.max(0, Math.min(percent, 100));
  const getPercent = w => w * 100;
  const calcPercent = w => 1.0 - ((w - tempstart) / (tempstop - tempstart));

  const targetPercent = squish(getPercent(calcPercent(target.avg)));

  const raining = weather.daily.data[0].precipProbability > 0.25;

  return {
    target: targetPercent,
    min: squish(targetPercent - 10),
    max: squish(targetPercent + 10),
    raining,
  };
}

function processDailyWeather(weather, tempstart, tempstop) {
  const timeWeather = weather;

  const squish = percent => Math.max(0, Math.min(percent, 100));
  const getPercent = w => w * 100;
  const calcPercent = w => 1.0 - ((w - tempstart) / (tempstop - tempstart));
  const avg = (a, b) => (a + b) / 2.0;

  const raining = weather.precipProbability > 0.25;

  const targetPercent = squish(getPercent(calcPercent(avg(timeWeather.apparentTemperatureHigh, timeWeather.apparentTemperatureLow))));
  return {
    target: targetPercent,
    min: squish(targetPercent - 10),
    max: squish(targetPercent + 10),
    raining,
  };
}


/*
returns
{
  type: 'fullbody' | 'seperate',
  fullbody: '',
  upperbody: '',
  lowerbody: '',
  jacket: '',
  shoes: '',
  headgear: '',
  gloves: '',
}

dayInfo
{
  start: Moment Date
  stop: Moment Date
}

settings
{
  resolution: int
}
*/
const categories = [
  /* {
    name: 'fullbody',
    gender: true,
    omit: false,
  }, */
  {
    name: 'headgear',
    gender: true,
    omit: true,
  },
  {
    name: 'gloves',
    gender: true,
    omit: true,
  },
  {
    name: 'shoes',
    gender: true,
    omit: false,
  },
];

const nCategories = [
  {
    name: 'jacket',
    gender: true,
    omit: true,
  },
  {
    name: 'lowerbody',
    gender: true,
    omit: false,
  },
  {
    name: 'upperbody',
    gender: true,
    omit: false,
  },
];

export function predict(param) {
  const weather = processWeather(
    param.weather,
    moment(param.dayInformation.start),
    moment(param.dayInformation.stop),
    param.settings.resolution,
    param.settings.mintemp,
    param.settings.maxtemp,
  );

  const pieces = categories.map(predictType(
    param.gender,
    weather,
    false,
  ));
  const nPieces = nCategories.map(predictType(
    param.gender,
    weather,
    false,
  ));
  const fullbody = predictType(
    param.gender,
    weather,
    false,
  )({
    name: 'fullbody',
    gender: true,
    omit: false,
  });

  if (Math.abs(_.mean(_.map(_.map(nPieces, x => x[_.keys(x)[0]]).filter(x => x !== ''), p => _.toArray(svgs_).filter(s => s.name === p)[0].percentage)) - weather.target) < Math.abs(_.toArray(svgs_).filter(s => s.name === fullbody.fullbody)[0].percentage - weather.target)) {
    return _.reduce(_.flatten([pieces, [{ type: 'seperate' }], nPieces, [{ fullbody: '' }]]), _.extend);
  }
  return _.reduce(_.flatten([pieces, [{ type: 'fullbody' }], [fullbody], _.map(nCategories, x => ({ [x.name]: '' }))]), _.extend);
}

export function predictDay(param) {
  const weather = processDailyWeather(
    param.weather,
    param.settings.mintemp,
    param.settings.maxtemp,
  );

  const pieces = categories.map(predictType(
    param.gender,
    weather,
    true,
  ));
  const nPieces = nCategories.map(predictType(
    param.gender,
    weather,
    true,
  ));
  const fullbody = predictType(
    param.gender,
    weather,
    true,
  )({
    name: 'fullbody',
    gender: true,
    omit: false,
  });

  if (Math.abs(_.mean(_.map(_.map(nPieces, x => x[_.keys(x)[0]]).filter(x => x !== ''), p => _.toArray(svgs_).filter(s => s.type === p)[0].percentage)) - weather.target) < Math.abs(_.toArray(svgs_).filter(s => s.type === fullbody.fullbody)[0].percentage - weather.target)) {
    return _.reduce(_.flatten([pieces, nPieces, [{ fullbody: '' }]]), _.extend);
  }
  return _.reduce(_.flatten([pieces, [fullbody], _.map(nCategories, x => ({ [x.name]: '' }))]), _.extend);
}
