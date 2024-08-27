import { useDispatch, useSelector } from "react-redux";

import { formatCurrency } from "../../utils/helper";

import EmptyPage from "../../ui/EmptyPage";
import DeleteButton from "../cart/DeleteButton";
import { deleteFavoriteList } from "./favoriteSlice";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CleareFavoriteModal from "./ClearFavoriteModal";

function FavoritesList() {
  const dispatch = useDispatch();
  const { favoriteListItems } = useSelector((state) => state?.favoriteList);

  // modal
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  if (!favoriteListItems.length)
    return (
      <EmptyPage
        page="Favorite list"
        message="Start adding some Fruits to your favorite list"
      />
    );

  return (
    <>
      <div className="container mt-14">
        <h2 className=" mt-3 divide-y divide-stone-200 border-b">
          Favorite products
        </h2>

        {favoriteListItems.length > 0 &&
          favoriteListItems.map((item) => {
            return (
              <div key={item.id} className="flex justify-between mt-6 px-4">
                <p>{item ? item.name : "product not found"}</p>
                <div className="flex items-center gap-4 font-bold">
                  <p>{formatCurrency(item.id)}</p>
                  <button
                    onClick={() => {
                      dispatch(deleteFavoriteList(item.id));
                    }}
                  >
                    <DeleteButton id={favoriteListItems.id} />
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="flex justify-end mt-10">
        <button className="btn primaryBtn" onClick={handleOpen}>
          Clear cart
        </button>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={handleClose}>
            <CleareFavoriteModal
              onClose={handleClose}
              id={favoriteListItems.id}
            />
          </Modal>
        )}
      </div>
    </>
  );
}

export default FavoritesList;
