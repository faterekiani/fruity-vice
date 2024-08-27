import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import favoriteReducer from "./features/favorites/favoriteSlice";

const store = configureStore({
  reducer: { cart: cartReducer, favoriteList: favoriteReducer },
});

export default store;
