import { configureStore } from "@reduxjs/toolkit";
import busketSlice from "./slices/busketSlice";
import categoriesSlice from "./slices/categoriesSlice";
import productSlice from "./slices/productSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    categories: categoriesSlice,
    busket: busketSlice,
  },
});
export default store;
