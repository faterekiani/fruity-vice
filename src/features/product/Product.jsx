/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

import Modal from "../../ui/Modal.jsx";
import DetailsModal from "./DetailsModal.jsx";

import { useFavorites } from "../favorites/useFavorites.js";
import { addItem } from "../cart/cartSlice.js";
import useLoacalStorage from "../../hook/useLocalStorage.js";

function Product({ fruit }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const { id, name, family, nutritions } = fruit;
  const { calories, carbohydrates, fat, protein, sugar } = nutritions;

  // modal
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const { setter } = useLoacalStorage();

  // Product Add To Cart
  function handleAddToCart() {
    const newItem = { id, name };
    setter(newItem);
    dispatch(addItem(newItem));
  }

  // favorite
  const { addToFavorites, removeFromFavorites, isFavorited } = useFavorites();
  const handleFavoriteToggle = () => {
    if (isFavorited(id, name)) {
      removeFromFavorites(id);
      toast.success(`"${name}" removed from favorites!`);
    } else {
      addToFavorites(fruit);
      toast.success(`"${name}" added to favorites`);
    }
  };

  return (
    <>
      <li className="product-item relative">
        <div className="absolute top-5 right-5 " onClick={handleFavoriteToggle}>
          {isFavorited(id) ? (
            <MdFavorite className="size-5" />
          ) : (
            <MdFavoriteBorder className="size-5" />
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
