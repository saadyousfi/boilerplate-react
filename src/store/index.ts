import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// >>> [IMPORT NEW REDUCERS BELOW]
// >>> [IMPORT NEW SAGAS BELOW]

const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;

const defaultMiddleware = getDefaultMiddleware();
export const store = configureStore({
  reducer: {
    // >>> [REGISTER NEW REDUCERS BELOW]
  },
  middleware: [...defaultMiddleware, sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development' ? { latency: 0 } : false,
});

// >>> [RUN NEW SAGAS BELOW]

export type RootState = ReturnType<typeof store.getState>;
