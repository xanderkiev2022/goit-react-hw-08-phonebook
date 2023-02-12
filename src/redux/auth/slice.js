import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.error = '';
  state.isLoading = false;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
const handleLogoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
};
const handlePendingRefreshing = state => {
  state.isRefreshing = true;
};
const handleUserFulfilledRefreshing = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = '';
};
const handleRejectedRefreshing = (state, action) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogoutFulfilled)
      .addCase(refreshUser.pending, handlePendingRefreshing)
      .addCase(refreshUser.fulfilled, handleUserFulfilledRefreshing)
      .addCase(refreshUser.rejected, handleRejectedRefreshing);      
  },
});

export const authReducer = authSlice.reducer;
