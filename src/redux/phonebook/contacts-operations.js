import contactsApi from 'services/contactsApi';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const response = await contactsApi.addContact(contact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const response = await contactsApi.fetchContacts();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (idToDelete, thunkAPI) => {
    try {
      await contactsApi.deleteContact(idToDelete);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.status);
    }
  }
);
