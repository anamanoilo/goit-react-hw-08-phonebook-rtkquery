import { configureStore } from '@reduxjs/toolkit';
import phonebookApi from 'services/phonebookApi';
import rootReducer from './phonebook/phonebook-reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: defaultMiddleware =>
    defaultMiddleware().concat(phonebookApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
