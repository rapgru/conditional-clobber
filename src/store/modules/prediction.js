import pictureService from 'workerize-loader!@/services/picture-service/picture-service';
import predictionService from 'workerize-loader!@/services/ml-service/ml-service';
import _ from 'lodash';
import moment from 'moment-timezone';

const picture = pictureService();
const prediction = predictionService();

function checkAndPush(arr, elem) {
  if (elem !== '') arr.push(elem);
}

export default {
  state: {
    renderedPicture: {
      svg: '',
    },
  },
  mutations: {
    setPic(state, pic) {
      state.renderedPicture.svg = pic;
    },
  },
  actions: {
    predictToday(context) {
      const genderPrefix = context.rootState.general.settings.avatar.gender === 'Female' ? 'woman' : 'man';
      const { unit } = context.rootState.general.settings;
      context.commit('setLoading', true);
      prediction.predict({
        weather: context.rootState.general.weather.timemachine.data,
        gender: _.toLower(context.rootState.general.settings.avatar.gender),
        dayInformation: { start: moment.tz(context.rootState.general.settings.timezone).hour(5).minute(30).second(0).format(), stop: moment.tz(context.rootState.general.settings.timezone).hour(19).minute(30).second(0).format() },
        settings: { resolution: 4, mintemp: (unit === 'ca' ? 0 : 15), maxtemp: (unit === 'ca' ? 35 : 100) },
      })
        .then((prediction_) => {
          const renderablePrediction = [
            `${genderPrefix}Body${context.rootState.general.settings.avatar.body}`,
          ];
    
          if (prediction_.type === 'fullbody') {
            checkAndPush(renderablePrediction, prediction_.fullbody);
          } else {
            checkAndPush(renderablePrediction, prediction_.lowerbody);
            checkAndPush(renderablePrediction, prediction_.upperbody);
            checkAndPush(renderablePrediction, prediction_.jacket);
          }
          checkAndPush(renderablePrediction, prediction_.gloves);
          checkAndPush(renderablePrediction, prediction_.shoes);
          checkAndPush(renderablePrediction, `${genderPrefix}Hair${context.rootState.general.settings.avatar.hairType.replace(/\//g, '')}${context.rootState.general.settings.avatar.hair}`);
          checkAndPush(renderablePrediction, prediction_.headgear);
          return picture.renderPrediction(renderablePrediction);
        })
        .then((renderedPicture) => {
          context.commit('setPic', renderedPicture);
          context.commit('setLoading', false);
        });
    },
  },
};
