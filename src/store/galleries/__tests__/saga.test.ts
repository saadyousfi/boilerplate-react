import { expectSaga } from 'redux-saga-test-plan';
import { galleriesSaga } from '../saga';
test('it should ', done => {
  expectSaga(galleriesSaga)
    .run()
    .then(() => done());
});
