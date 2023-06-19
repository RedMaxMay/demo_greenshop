import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: JSON.parse(localStorage.getItem("GreenShop")) || [],
  },
  reducers: {
    addToBasket: (state, action) => {
      const target = state.basket.find((item) => item.id === action.payload.id);

      if (target) {
        target.quantity += action.payload.quantity;
      } else {
        state.basket = [...state.basket, action.payload];
      }
    },
    deleteFromBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    incrementInBasket: (state, action) => {
      state.basket.find((product) => product.id === action.payload).quantity++;
    },
    decrementInBasket: (state, action) => {
      const target = state.basket.find(
        (product) => product.id === action.payload
      );
      if (target.quantity > 1) target.quantity--;
    },
    deleteAllFromBasket: (state, action) => {
      state.basket = [];
    },
  },
});

export const {
  addToBasket,
  deleteFromBasket,
  incrementInBasket,
  decrementInBasket,
  deleteAllFromBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
