import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveRegisterData: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    saveLoginData: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    refreshUserData: (state, action) => {
      state.user = action.payload;
    },
    resetUserData: () => {
      return initialState;
    },
  },
});

export default authSlice;
