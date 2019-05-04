import test from '!!raw-loader!@/assets/SVGs/Woman/Body/White.svg';
import { renderPrediction } from '@/services/picture-service/picture-service';

export default {
  state: {
    renderedPicture: {
      svg: test,
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
      const picture = renderPrediction(null);
      context.commit('setPic', picture);
    },
  },
};
