import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phonebookApi from 'services/phonebookApi';
import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('filter/change');

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const rootReducer = combineReducers({
  filter: filterReducer,
  [phonebookApi.reducerPath]: phonebookApi.reducer,
});

export default rootReducer;
