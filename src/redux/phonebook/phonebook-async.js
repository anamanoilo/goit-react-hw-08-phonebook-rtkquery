import contactsApi from 'services/ApiService';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetchStatus',
  async (_, thunkApi) => {
    try {
      const response = await contactsApi.fetchContacts();
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteStatus',
  async (id, thunkApi) => {
    try {
      const response = await contactsApi.deleteContact(id);
      return response.id;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addStatus',
  async (contact, thunkApi) => {
    try {
      const response = await contactsApi.addContact(contact);
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export { fetchContacts, deleteContact, addContact };
