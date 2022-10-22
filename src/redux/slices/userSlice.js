import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginURL, registerURL } from "../../helpers/api";
import request from "../../helpers/request";

const initialState = {
  userInfo: null,
  loading: false,
  error: false,
};
export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (info) => {
    return request("POST", registerURL, info).then((resp) => resp.data);
  }
);
export const loginUser = createAsyncThunk("user/loginUser", async (info) => {
  return request("POST", loginURL, info).then((resp) => resp.data);
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending](state) {
      state.loading = true;
    },
    [registerUser.fulfilled](state, { payload }) {
      state.userInfo = payload;
      state.loading = false;
    },
    [registerUser.error](state) {
      state.error = "error in register";
    },
    [loginUser.pending](state) {
      state.loading = true;
    },
    [loginUser.fulfilled](state, { payload }) {
      state.userInfo = payload;
      state.loading = false;
    },
    [loginUser.error](state) {
      state.error = "error in register";
    },
  },
});

export default userSlice.reducer;

export const tokkenSelector = (state) => state.user.userInfo.token;
export const userSelector = (state) => state.user.userInfo;
