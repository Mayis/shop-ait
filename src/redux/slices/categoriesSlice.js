import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allCategoriesURL, selectedCategoryURL } from "../../helpers/api";
import request from "../../helpers/request";

const initialState = {
  allCategories: null,
  selectedCategory: null,
  loading: false,
  error: false,
};

export const getAllCategories = createAsyncThunk(
  "categories/getAllCategories",
  async (token) => {
    return await request("GET", allCategoriesURL, null, token).then(
      (resp) => resp.data
    );
  }
);
export const getSelectedCategory = createAsyncThunk(
  "categories/getSelectedCategories",
  async ({ token, id }) => {
    return await request("GET", selectedCategoryURL + id, null, token).then(
      (resp) => resp.data
    );
  }
);
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCategories.pending](state) {
      state.loading = true;
    },
    [getAllCategories.fulfilled](state, { payload }) {
      state.allCategories = payload;
      state.loading = false;
    },
    [getAllCategories.error](state) {
      state.error = true;
    },
    // -------------------------------------------------------
    [getSelectedCategory.pending](state) {
      state.loading = true;
    },
    [getSelectedCategory.fulfilled](state, { payload }) {
      state.selectedCategory = payload;
      state.loading = false;
    },
    [getSelectedCategory.error](state) {
      state.error = true;
    },
  },
});

export default categoriesSlice.reducer;
export const allCategoriesSelector = (state) => state.categories.allCategories;
export const selectedCategorySelector = (state) =>
  state.categories.selectedCategory;
