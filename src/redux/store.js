import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './phonebook/phonebook-reducers';

const store = configureStore({
  reducer: {
    phonebook: rootReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
