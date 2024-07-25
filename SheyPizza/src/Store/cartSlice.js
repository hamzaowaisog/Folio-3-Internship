import { createSlice } from "@reduxjs/toolkit";
import { fetchPizzaData } from "../API/useFetch";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    initialCart: JSON.parse(localStorage.getItem("cart")) || [],
  },
  reducers: {
    updatingCart: (state, action) => {
      const { pizza, variant, quantity } = action.payload;
      const existingItemIndex = state.initialCart.findIndex(
        (item) =>
          item.pizza.name === pizza.name &&
          item.pizza.selectedVariant === variant
      );
      if (existingItemIndex !== -1) {
        state.initialCart[existingItemIndex].quantity += quantity;
      } else {
        state.initialCart.push({ pizza, variant, quantity });
      }
      try {
        localStorage.setItem("cart", JSON.stringify(state.initialCart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    },
    removingFromCart: (state, action) => {
      const { pizza, variant } = action.payload;
      state.initialCart = state.initialCart.filter(
        (item) => !(item.pizza.name === pizza.name && item.pizza.selectedVariant === variant)
      );
      try {
        localStorage.setItem("cart", JSON.stringify(state.initialCart));
      } catch (error) {
        console.error("Failed to save cart to localStorage:", error);
      }
    },
  },
  extraReducers: (buidler) => {
    buidler.addCase(fetchPizzaData.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
