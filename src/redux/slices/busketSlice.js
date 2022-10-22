import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { busketProductsURL } from "../../helpers/api";
import request from "../../helpers/request";

const initialState = {
  busketProducts: null,
  loading: false,
  error: false,
};

export const getBusketProducts = createAsyncThunk(
  "busket/getBusketProducts",
  async (token) => {
    return request("GET", busketProductsURL, null, token).then(
      (resp) => resp.data
    );
  }
);
const busketSlice = createSlice({
  name: "busket",
  initialState,
  reducers: {},
  extraReducers: {
    [getBusketProducts.pending](state) {
      state.loading = true;
    },
    [getBusketProducts.fulfilled](state, { payload }) {
      state.busketProducts = payload;
      state.loading = false;
    },
    [getBusketProducts.error](state) {
      state.error = true;
    },
  },
});

export default busketSlice.reducer;
export const busketProductsSelector = (state) => state.busket.busketProducts;
