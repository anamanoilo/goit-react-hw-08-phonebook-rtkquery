import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createReducer } from '@reduxjs/toolkit';
import phonebookApi from 'services/phonebookApi';
import { createAction } from '@reduxjs/toolkit';
import authSlice from './auth-slice';

export const changeFilter = createAction('filter/change');

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const persistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = combineReducers({
  filter: filterReducer,
  [phonebookApi.reducerPath]: phonebookApi.reducer,
  auth: persistReducer(persistConfig, authSlice.reducer),
});

export default rootReducer;
