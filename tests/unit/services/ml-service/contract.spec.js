import { assert } from 'chai';
import ml from 'workerize-loader!@/services/ml-service/ml-service';

describe('ML Service Contract - version 1.0', () => {
  it('service function predictClothing exists', () => {
    assert.isFunction(ml().predictCloting);
  });
});
