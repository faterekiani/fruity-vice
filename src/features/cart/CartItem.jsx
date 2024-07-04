/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helper";
import DeleteButton from "./DeleteButton";

function CartItem({ product }) {
  const { name, id, count } = product;

  const price = id * count;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between ">
      <div className="flex items-center gap-x-4">
        <p className="mb-1">{count} &times; </p>
        <p className="mb-1">{name}</p>
      </div>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(price)}</p>

        <DeleteButton id={id} />
      </div>
    </li>
  );
}
export default CartItem;
