import _ from 'lodash';
import svgs_ from '@/services/picture-service/svgs';
import moment from 'moment';

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

function predictType(gender, targetWeather) {
  function nearest(arr) {
    return arr.reduce((p, c) => {
      const cDiff = Math.abs(c.percentage - targetWeather.target);
      if (cDiff <= p.diff) {
        return { diff: cDiff, svg: c };
      }
      return p;
    }, { diff: Infinity, svg: '' });
  }
  console.log(targetWeather);
  return function pc(category) {
    const genderPieces = _.toArray(svgs_).filter(s => s.gender === gender);
    const categoryPieces = genderPieces.filter(s => s.category === category.name);
    const rangePieces = categoryPieces.filter(
      s => s.percentage > targetWeather.min && s.percentage < targetWeather.max,
    );
    if (rangePieces.length === 0 || !rangePieces) {
      if (category.omit) {
        return {
          [category.name]: '',
        };
      }
      const selected = nearest(categoryPieces);
      return {
        [category.name]: getRandomColor(selected.svg.type, category.name, gender),
      };
    }
    const selected = nearest(rangePieces);
    return {
      [category.name]: getRandomColor(selected.svg.type, category.name, gender),
    };
  };
}

function quantisize(min, max, resolution) {
  const step = (max - min) / resolution;
  const mins = _.range(min, max, step);
  const maxs = _.range(min + step, max, step);
  const quants = _.zipWith(
    mins,
    maxs,
    (min_, max_) => ({ from: min_, to: max_, avg: (min_ + max_) / 2 }),
  );
  return point => (quants.filter(q => q.from <= point.apparentTemperature && q.to >= point.apparentTemperature)[0]).avg;
}

function processWeather(weather, timestart, timestop, resolution, tempstop, tempstart) {
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

  console.log(target);

  const squish = percent => Math.max(0, Math.min(percent, 100));
  const getPercent = w => w * 100;
  const calcPercent = w => 1 - ((w - tempstart) / (tempstop - tempstart));

  const targetPercent = squish(getPercent(calcPercent(target.avg)));
  return {
    target: targetPercent,
    min: squish(targetPercent - 10),
    max: squish(targetPercent + 10),
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
export function predict(param) {
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
      name: 'shoes',
      gender: true,
      omit: false,
    },
    {
      name: 'upperbody',
      gender: true,
      omit: false,
    },
  ];
  const pieces = categories.map(predictType(
    param.gender,
    processWeather(
      param.weather,
      param.dayInformation.start,
      param.dayInformation.stop,
      param.settings.resolution,
      param.settings.mintemp,
      param.settings.maxtemp,
    ),
  ));
  return _.reduce(pieces, _.extend);
}
