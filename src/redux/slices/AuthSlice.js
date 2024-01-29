import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (auth, action) => {
      const token = action.payload.token;
      auth.token = token;
      auth.isLoggedIn = true;
    },
    login: (auth, action) => {
      const token = action.payload.token;
      auth.token = token;
      auth.isLoggedIn = true;
    },
    logout: (auth, action) => {
      auth.token = null;
      auth.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout, signUp } = authSlice.actions;
export default authSlice.reducer;
