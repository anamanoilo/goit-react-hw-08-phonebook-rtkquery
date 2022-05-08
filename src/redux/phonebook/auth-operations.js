import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set: token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const registerContact = createAsyncThunk(
  'auth/register',
  async (contact, thunkAPI) => {
    try {
      const response = await axios({
        method: 'post',
        url: '/users/signup',
        data: contact,
      });
      token.set(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginContact = createAsyncThunk(
  'auth/login',
  async (contact, thunkAPI) => {
    try {
      const response = await axios({
        method: 'post',
        url: '/users/login',
        data: contact,
      });
      token.set(response.data.token);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return;
    }
    token.set(persistedToken);
    try {
      const response = await axios({
        method: 'get',
        url: '/users/current',
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await axios({
      method: 'post',
      url: '/users/logout',
    });
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
