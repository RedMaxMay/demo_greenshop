import { createSlice } from "@reduxjs/toolkit";
import { initialCategories } from "../initialValue/categories";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: initialCategories,
    isInitialCategories: true,
    loading: false,
  },
  reducers: {
    loadCategories: (state, action) => {
      state.isInitialCategories = false;
      state.loading = true;
      state.categories = [...action.payload];
      state.loading = false;
    },
    initialCategoriesToggle: (state, action) => {
      state.isInitialCategories = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { loadCategories, initialCategoriesToggle } =
  categorySlice.actions;
