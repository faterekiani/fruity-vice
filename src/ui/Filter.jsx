/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // current value from URL
  const currentFilter = searchParams.get(filterField) || "";

  function handleClick(e) {
    searchParams.set(filterField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select value={currentFilter} options={options} onChange={handleClick} />
  );
}

export default Filter;
