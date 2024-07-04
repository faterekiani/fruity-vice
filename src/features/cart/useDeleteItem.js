import { useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import { toast } from "react-toastify";

export function useDeleteCart() {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart is empty");
  };

  return { handleClearCart };
}
