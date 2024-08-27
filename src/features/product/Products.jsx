/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router-dom";

import { getFruites } from "../../services/apiFruites";

import ProductsOperations from "./ProductsOperations";
import Product from "./Product";

function Products() {
  const menu = useLoaderData();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("family") || "all";
  const [filteredFruit, setFilteredFruit] = useState([]);

  useEffect(
    function () {
      if (filterValue === "all") setFilteredFruit(menu);
      else setFilteredFruit(menu.filter((item) => item.family === filterValue));
    },
    [filterValue, menu]
  );

  // SORT
  const getSortFromUrl = searchParams.get("sortBy") || "id-asc";
  const [filed, direction] = getSortFromUrl.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  const isNumericField = (field) => typeof field === "number"; // Check if field is numeric

  const numericSort = (a, b) => (a[filed] - b[filed]) * modifier;
  const stringSort = (a, b) => a[filed].localeCompare(b[filed]) * modifier;

  const sortedFruits = filteredFruit.sort(
    // Choose based on first element
    isNumericField(menu[0][filed]) ? numericSort : stringSort
  );

  return (
    <>
      <div className="container mt-10">
        <ProductsOperations products={menu} />

        <ul className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-4 mb-8">
          {sortedFruits.map((fruit) => (
            <Product fruit={fruit} key={fruit.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

// loader function - data loading
export async function loader() {
  const fruitMenu = await getFruites();

  return fruitMenu;
}

export default Products;
