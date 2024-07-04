/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteItem } from "./cartSlice";

export default function DeleteModal({ onClose, id }) {
  const dispatch = useDispatch();

  return (
    <div className="mt-6">
      <div className="px-10">
        <p className="text-lg">Are you sure you want to delete?</p>
        <div className="space-x-4 mt-8">
          <button className="btn secondaryBtn" onClick={onClose}>
            cancle
          </button>
          <button
            className="btn primaryBtn"
            onClick={() => {
              try {
                dispatch(deleteItem(id));
                toast.success("Item deleted successfully!");
              } catch (error) {
                toast.error("An error occurred!");
              }
            }}
          >
            yes
          </button>
        </div>
      </div>
    </div>
  );
}
