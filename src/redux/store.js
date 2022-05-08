import { configureStore } from '@reduxjs/toolkit';
import phonebookApi from 'services/phonebookApi';
import rootReducer from './phonebook/phonebook-reducers';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(phonebookApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

const persistedStore = persistStore(store);
const unitedStores = { persistedStore, store };

export default unitedStores;
