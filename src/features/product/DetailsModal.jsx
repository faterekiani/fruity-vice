/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helper";

function DetailsModal({ fruit }) {
  const { id, name, nutritions } = fruit;
  const { calories, carbohydrates, fat, protein, sugar } = nutritions;

  return (
    <div className="flex items-center justify-between gap-x-10 py-8 px-4">
      <img src="../../../public/modalPic.png" className="h-48" />

      <div className="flex flex-col gap-y-4">
        <h2 className="font-medium text-xl text-stone-800">{name}</h2>

        <h1 className="text-gray-700">
          calories: {calories}, carbohydrates: {carbohydrates}, fat: {fat},
          protein: {protein}, sugar: {sugar}
        </h1>

        <h5>{formatCurrency(id)}</h5>
      </div>
    </div>
  );
}
export default DetailsModal;
