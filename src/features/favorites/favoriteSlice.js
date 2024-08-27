import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteListItems: localStorage.getItem("faveListItems")
    ? JSON.parse(localStorage.getItem("faveListItems"))
    : [],
};

const favoriteSlice = createSlice({
  name: "favoriteList",
  initialState,
  reducers: {
    addFavoriteList: (state, action) => {
      // const faveItem = { ...action.payload };
      state.favoriteListItems?.push(action.payload);
      localStorage.setItem(
        "faveListItems",
        JSON.stringify(state.favoriteListItems)
      );
    },

    deleteFavoriteList: (state, action) => {
      state.favoriteListItems = state.favoriteListItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem(
        "faveListItems",
        JSON.stringify(state.favoriteListItems)
      );
    },

    clearFavoriteList: (state) => {
      state.favoriteListItems = [];
    },
  },
});

export const { addFavoriteList, deleteFavoriteList, clearFavoriteList } =
  favoriteSlice.actions;

export default favoriteSlice.reducer;
