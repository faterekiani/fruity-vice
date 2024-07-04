/* eslint-disable react/prop-types */

function Select({ options, value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="p-2 border border-x-gray-100 rounded-md shadow-sm mb-3"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
