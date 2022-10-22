import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addBusketURL,
  productURL,
  selectedPorductURL,
  sendCommentURL,
  sendReactionURL,
} from "../../helpers/api";
import request from "../../helpers/request";

const initialState = {
  mainProducts: null,
  selectedProduct: null,
  loading: false,
  error: false,
};
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (token) => {
    return request("GET", productURL, null, token).then((resp) => resp.data);
  }
);
export const getSelectedProduct = createAsyncThunk(
  "products/getSelectedProduct",
  async ({ token, id }) => {
    return request("GET", selectedPorductURL + id, null, token).then(
      (resp) => resp.data
    );
  }
);
export const postComment = createAsyncThunk(
  "products/postComment",
  async ({ token, product_id, body }) => {
    return request("POST", sendCommentURL, { product_id, body }, token).then(
      (resp) => resp
    );
  }
);
export const postReaction = createAsyncThunk(
  "products/postReaction",
  async ({ token, product_id, type, action }) => {
    return request(
      "POST",
      sendReactionURL,
      { product_id, type, action },
      token
    ).then((resp) => console.log(resp));
  }
);
export const addToBusket = createAsyncThunk(
  "products/addToBusket",
  async ({ token, product_id }) => {
    return request("POST", addBusketURL, { product_id }, token).then((resp) =>
      console.log(resp)
    );
  }
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending](state) {
      state.loading = true;
    },
    [getProducts.fulfilled](state, { payload }) {
      state.mainProducts = payload;
      state.loading = false;
    },
    [getProducts.error](state) {
      state.error = "error in product";
    },
    // --------------------------------------------------
    [getSelectedProduct.pending](state) {
      state.loading = true;
    },
    [getSelectedProduct.fulfilled](state, { payload }) {
      state.selectedProduct = payload;
      state.loading = false;
    },
    [getSelectedProduct.error](state) {
      state.error = "error in product";
    },
  },
});

export default productSlice.reducer;
export const topSellersSelector = (state) => state.products.mainProducts;
export const selectedProductSelector = (state) =>
  state.products.selectedProduct;
