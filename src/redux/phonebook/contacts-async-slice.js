import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './phonebook-async';

const contactsReducer = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      return { ...state, status: 'pending' };
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return { ...state, status: 'fulfilled', contacts: payload };
    },
    [fetchContacts.rejected]: (state, _) => {
      return { ...state, status: 'rejected', contacts: [] };
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: 'fulfilled',
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };
    },
    [deleteContact.rejected]: (state, _) => {
      return { ...state, status: 'rejected' };
    },

    [addContact.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        status: 'fulfilled',
        contacts: [payload, ...state.contacts],
      };
    },
    [addContact.rejected]: (state, _) => {
      return { ...state, status: 'rejected' };
    },
  },
});

export default contactsReducer;

// const rootReducer = combineReducers({
//   filter: filterReducer,
//   contacts: contactsReducer.reducer,
// });
