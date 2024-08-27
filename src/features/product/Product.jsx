/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

import Modal from "../../ui/Modal.jsx";
import DetailsModal from "./DetailsModal.jsx";

import { addItem } from "../cart/cartSlice.js";
import {
  addFavoriteList,
  deleteFavoriteList,
} from "../favorites/favoriteSlice.js";

function Product({ fruit }) {
  const dispatch = useDispatch();

  const { favoriteListItems } = useSelector((state) => state?.favoriteList);

  const [isOpen, setIsOpen] = useState(false);

  const { id, name, family, nutritions } = fruit;
  const { calories, carbohydrates, fat, protein, sugar } = nutritions;

  // modal
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const newItem = { id, name };

  // Product Add To Cart
  function handleAddToCart() {
    dispatch(addItem(newItem));
  }

  // Product Add To Favorites
  const handleAddToFavorites = () => {
    dispatch(addFavoriteList(fruit));
  };

  function isFavorited(fruitId, fruitName) {
    return favoriteListItems.some(
      (item) => item.id === fruitId && item.name === fruitName
    );
  }

  const handleFavoriteToggle = () => {
    if (isFavorited(id, name)) {
      dispatch(deleteFavoriteList(id));
      toast.success(`"${name}" removed from favorites!`);
    } else {
      dispatch(addFavoriteList(newItem));

      toast.success(`"${name}" added to favorites`);
    }
  };

  return (
    <>
      <li className="product-item relative">
        <div className="absolute top-5 right-5 " onClick={handleFavoriteToggle}>
          {isFavorited(id, name) ? (
            <MdFavorite
              className="size-5 cursor-pointer"
              onClick={() => handleAddToFavorites()}
            />
          ) : (
            <MdFavoriteBorder className="size-5 cursor-pointer" />
          )}
        </div>

        <img
          src="../../../public/defaultProductPic.png"
          alt={name}
          className="w-full h-40 object-cover"
        />

        <h3 className="text-lg font-medium tracking-tight text-gray-900 ">
          {name}
        </h3>

        <h5 className="text-sm font-medium tracking-tight text-red-500 pb-2">
          {family}
        </h5>

        <ul className="text-gray-700 text-xs md:text-sm  ">
          <li>calories: {calories}</li>
          <li>carbohydrates: {carbohydrates}</li>
          <li>fat: {fat}</li>
          <li>protein: {protein}</li>
          <li>sugar: {sugar}</li>
        </ul>

        <div className="space-y-2 mt-3">
          <button
            className="btn primaryBtn"
            onClick={() => {
              try {
                handleAddToCart();
                toast.success("Item add to cart successfully");
              } catch (error) {
                toast.error("An error occurred!");
              }
            }}
          >
            add to cart
          </button>

          <button className="btn secondaryBtn" onClick={handleOpen}>
            show details
          </button>
        </div>
      </li>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <DetailsModal fruit={fruit} onClose={handleClose} />
        </Modal>
      )}
    </>
  );
}

export default Product;
