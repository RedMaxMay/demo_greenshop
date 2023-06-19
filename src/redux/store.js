import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categorySlice";
import productsReducer from "./productSlice";
import basketReducer from "./basketSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    basket: basketReducer,
  },
});
