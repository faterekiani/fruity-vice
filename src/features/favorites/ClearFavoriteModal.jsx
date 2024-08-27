/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { clearFavoriteList } from "./favoriteSlice";

export default function CleareFavoriteModal({ onClose }) {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearFavoriteList());
  };
  return (
    <div className="mt-6">
      <div className="px-10">
        <p className="text-lg">Are you sure you want to clear all favorites?</p>
        <div className="space-x-4 mt-8">
          <button className="btn secondaryBtn" onClick={onClose}>
            cancle
          </button>

          <button className="btn primaryBtn" onClick={handleClear}>
            yes
          </button>
        </div>
      </div>
    </div>
  );
}
