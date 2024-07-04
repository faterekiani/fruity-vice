const useLoacalStorage = () => {
  const setter = (item) => {
    let localStorageItems = JSON.parse(localStorage.getItem("items") || "[]");

    if (localStorageItems.find((existingItem) => existingItem.id === item.id)) {
      localStorageItems = localStorageItems.filter(
        (existingItem) => existingItem.id !== item.id
      );
      localStorageItems.push(item);
    } else {
      localStorageItems.push(item);
    }
    update(localStorageItems);
  };

  const getter = () => {
    const localStorageItems = JSON.parse(localStorage.getItem("items") || "[]");
    return localStorageItems;
  };

  const update = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
  };

  return { setter, getter };
};

export default useLoacalStorage;
