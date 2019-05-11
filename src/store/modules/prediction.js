import pictureService from 'workerize-loader!@/services/picture-service/picture-service';
import predictionService from 'workerize-loader!@/services/ml-service/ml-service';

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
    warnings: [
      'ice',
      'rain',
    ],
  },
  mutations: {
    setPic(state, pic) {
      state.renderedPicture.svg = pic;
    },
  },
  actions: {
    predictToday(context) {
      const genderPrefix = context.rootState.general.settings.avatar.gender === 'Female' ? 'woman' : 'man';
      prediction.predict()
        .then((prediction_) => {
          const renderablePrediction = [
            `${genderPrefix}Body${context.rootState.general.settings.avatar.body}`,
          ];
          if (prediction_.clothing.type === 'fullbody') {
            checkAndPush(renderablePrediction, prediction_.clothing.fullbody);
          } else if (prediction.clothing.type === 'seperate') {
            checkAndPush(renderablePrediction, prediction_.clothing.lowerbody);
            checkAndPush(renderablePrediction, prediction_.clothing.upperbody);
            checkAndPush(renderablePrediction, prediction_.clothing.jacket);
          }
          checkAndPush(renderablePrediction, prediction_.gloves);
          checkAndPush(renderablePrediction, prediction_.shoes);
          checkAndPush(renderablePrediction, `${genderPrefix}Hair${context.rootState.general.settings.avatar.hairType.replace(/\//g, '')}${context.rootState.general.settings.avatar.hair}`);
          console.log(renderablePrediction);
          return picture.renderPrediction(renderablePrediction);
        })
        .then((renderedPicture) => {
          context.commit('setPic', renderedPicture);
        });
      //picture.renderPrediction([]);
    },
  },
};
