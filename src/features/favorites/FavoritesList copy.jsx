import { useLoaderData } from "react-router-dom";

import { useFavorites } from "./useFavorites";
import { getFruites } from "../../services/apiFruites";
import { formatCurrency } from "../../utils/helper";

import DeleteButton from "../../ui/DeleteButton";
import EmptyCart from "../cart/EmptyCart";

function FavoritesList() {
  const { favorites, removeFromFavorites } = useFavorites();

  // retrieves the data passed by the loader function
  const menu = useLoaderData();

  if (!favorites.length)
    return (
      <EmptyCart
        page="Favorite list"
        message="Start adding some Fruits to youre favorite list"
      />
    );

  return (
    <div className="container mt-14">
      <h2 className="divide-y divide-stone-200 border-b">Favorite products</h2>

      {favorites.length > 0 &&
        favorites.map((productId) => {
          const product = menu.find((item) => item.id === productId);
          return (
            <div key={productId} className="flex justify-between mt-6 px-4">
              <p>{product ? product.name : "product not found"}</p>
              <div className="flex items-center gap-4 font-bold">
                <p>{formatCurrency(productId)}</p>
                <button
                  onClick={() => {
                    removeFromFavorites(productId);
                  }}
                >
                  <DeleteButton />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export async function loader() {
  const fruitMenu = await getFruites();

  return fruitMenu;
}

export default FavoritesList;
