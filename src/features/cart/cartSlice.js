import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
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
        action.payload.count = 1; // Add count to the new item
        state.cart.push(action.payload);
      }
    },

    deleteItem(state, action) {
      //payload = id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
