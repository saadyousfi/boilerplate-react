import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

// >>> [IMPORT NEW REDUCER BELOW]
// >>> [IMPORT NEW SAGA BELOW]

const sagaMiddleware = createSagaMiddleware();
const { run: runSaga } = sagaMiddleware;

const defaultMiddleware = getDefaultMiddleware();
export const store = configureStore({
  reducer: {
    // >>> [REGISTER NEW REDUCER BELOW]
  },
  middleware: [...defaultMiddleware, sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development' ? { latency: 0 } : false,
});

// >>> [RUN NEW SAGA BELOW]

export type RootState = ReturnType<typeof store.getState>;
