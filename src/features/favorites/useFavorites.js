import { useState, useEffect } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  // fetch initial favorite data from local storage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites") || "[]";
    const parsedFavorites = JSON.parse(storedFavorites);

    setFavorites(parsedFavorites);
  }, []);

  // add by id
  const addToFavorites = (item) => {
    const isAlreadyFavorited = favorites.includes(item.id);

    if (!isAlreadyFavorited) {
      setFavorites([...favorites, item.id]);
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, item.id])
      );
    }
  };

  // remove by id
  const removeFromFavorites = (itemId) => {
    const updatedFavorites = favorites.filter((id) => id !== itemId);

    setFavorites(updatedFavorites);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  // currently favorited
  const isFavorited = (itemId) => favorites.includes(itemId);

  return { favorites, addToFavorites, removeFromFavorites, isFavorited };
};
