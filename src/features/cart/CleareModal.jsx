/* eslint-disable react/prop-types */
import { useDeleteCart } from "./useDeleteItem";

export default function CleareModal({ onClose }) {
  const { handleClearCart } = useDeleteCart();
  return (
    <div className="mt-6">
      <div className="px-10">
        <p className="text-lg">Are you sure you want to delete?</p>
        <div className="space-x-4 mt-8">
          <button className="btn secondaryBtn" onClick={onClose}>
            cancle
          </button>
          <button className="btn primaryBtn" onClick={handleClearCart}>
            yes
          </button>
        </div>
      </div>
    </div>
  );
}
