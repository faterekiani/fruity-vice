import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import Cart from "./features/cart/Cart";
import Products, { loader as menuLoader } from "./features/product/Products";
import Error from "./ui/Error";
import FavoritesList, {
  loader as favoriteLoader,
} from "./features/favorites/FavoritesList";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,

      children: [
        {
          path: "/",
          element: <Products />,
          loader: menuLoader,
          errorElement: <Error />,
        },

        { path: "/cart", element: <Cart /> },
        {
          path: "favorites",
          element: <FavoritesList />,
          loader: favoriteLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
