
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action) => {
      state.user = action.payload.username;
      state.role = action.payload.role;
    },
    login: (state, action) => {
      state.user = action.payload.username;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.user = null;
      state.role = null;
    },
  },
});

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer;
