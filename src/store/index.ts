import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// >>> [IMPORT NEW REDUCERS BELOW]
import { galleriesReducer } from './galleries';
// >>> [IMPORT NEW SAGAS BELOW]
import { galleriesSaga } from './galleries/saga';

const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;

const defaultMiddleware = getDefaultMiddleware();
export const store = configureStore({
  reducer: {
    // >>> [REGISTER NEW REDUCERS BELOW]
    galleries: galleriesReducer,
  },
  middleware: [...defaultMiddleware, sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development' ? { latency: 0 } : false,
});

// >>> [RUN NEW SAGAS BELOW]
runSaga(galleriesSaga);

export type RootState = ReturnType<typeof store.getState>;
