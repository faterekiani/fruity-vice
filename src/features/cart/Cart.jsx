import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "./CartItem";

import { formatCurrency } from "../../utils/helper";
import EmptyPage from "../../ui/EmptyPage";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CleareModal from "./CleareModal";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  // modal
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.id * (item.count || 1),
    0
  );

  // import { useDeleteCart } from "./useDeleteItem";
  // const { handleClearCart } = useDeleteCart();

  if (!cart.length)
    return <EmptyPage page="Cart" message="Start adding some Fruits" />;

  return (
    <>
      <div className="container mt-14">
        <Link to="/" className="linkButton">
          &larr; back to menu{" "}
        </Link>

        <ul className=" mt-3 divide-y divide-stone-200 border-b h-auto overflow-y-auto max-h-[317px] px-4">
          {cart.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </ul>

        <div className="flex  justify-between mt-6">
          <button className="btn primaryBtn" onClick={handleOpen}>
            Clear cart
          </button>

          <p className="text-md text-green-500 font-bold px-10">
            {formatCurrency(totalPrice)}
          </p>
        </div>
      </div>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <CleareModal onClose={handleClose} id={cart.id} />
        </Modal>
      )}
    </>
  );
}
export default Cart;
