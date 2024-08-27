import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.count++;
      } else {
        action.payload.count = 1;
        state.cart.push(action.payload);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    deleteItem(state, action) {
      //payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);

      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
