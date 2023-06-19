import { createSlice } from "@reduxjs/toolkit";
import { initialProducts } from "../initialValue/products";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: initialProducts,
    isInitialProducts: true,
  },
  reducers: {
    initialProductsToggle: (state, action) => {
      state.isInitialProducts = action.payload;
    },
    loadProducts: (state, action) => {
      state.isInitialProducts = false;
      state.products = action.payload.map((prod) => ({
        ...prod,
        selectShow: true,
        priceShow: true,
      }));
    },
    searchProducts: (state, action) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        selectShow: prod.title
          .toLowerCase()
          .includes(action.payload.toLowerCase()),
      }));
    },
    resetSearchFilter: (state, action) => {
      state.products = state.products.map((prod) => ({
        ...prod,
        selectShow: true,
        priceShow: true,
      }));
    },
    sortFilter: (state, action) => {
      if (action.payload === "Default") {
        state.products.sort((a, b) => a.id - b.id);
      } else if (action.payload === "Price - Low to High") {
        state.products.sort(
          (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
        );
      } else if (action.payload === "Price - High to Low") {
        state.products.sort(
          (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
        );
      }
    },
    priceFilter: (state, action) => {
      const { priceFrom, priceTo } = action.payload;
      const defaultPriceTo = priceTo === "" ? Infinity : priceTo;

      if (priceFrom || defaultPriceTo) {
        state.products = state.products.map((prod) => ({
          ...prod,
          priceShow:
            (prod.discont_price || prod.price) >= priceFrom &&
            (prod.discont_price || prod.price) <= defaultPriceTo,
        }));
      } else
        state.products = state.products.map((prod) => ({
          ...prod,
          selectShow: true,
          priceShow: true,
        }));
    },
  },
});

export default productSlice.reducer;
export const {
  loadProducts,
  searchProducts,
  resetSearchFilter,
  sortFilter,
  priceFilter,
  initialProductsToggle,
} = productSlice.actions;
