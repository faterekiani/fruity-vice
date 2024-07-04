/* eslint-disable react/prop-types */
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function ProductsOperations({ products }) {
  const filterOptions = products
    .map((fruit) => ({
      value: fruit.family,
      label: fruit.family,
    }))
    .filter(
      (obj, index, arr) =>
        arr.findIndex((item) => item.value === obj.value) === index
    );

  return (
    <div className="flex items-center justify-between mb-6 container px-4 pr-8">
      <Filter
        filterField="family"
        options={[{ value: "all", label: "All" }, ...filterOptions]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "sort by name (A-Z)" },
          { value: "name-desc", label: "sort by name (Z-A)" },
          { value: "id-asc", label: "sort by id (low first)" },
          { value: "id-desc", label: "sort by id (high first)" },
        ]}
      />
    </div>
  );
}

export default ProductsOperations;
