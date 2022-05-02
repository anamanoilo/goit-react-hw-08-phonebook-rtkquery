import { combineReducers } from 'redux';
import { createReducer, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import changeFilter from './phonebook-actions';

const filterReducer = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: (state, { payload }) => [
      ...state,
      { id: nanoid(), ...payload },
    ],
    deleteContact: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
  extraReducers: {},
});

export const { addContact, deleteContact } = contactsReducer.actions;

const rootReducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer.reducer,
});

export default rootReducer;
