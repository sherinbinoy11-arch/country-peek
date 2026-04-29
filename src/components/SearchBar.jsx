import { useState } from "react";

function SearchBar({ setQuery }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const v = e.target.value;
    setValue(v);

    if (!v.trim()) return;

    setQuery(v);
  };

  return (
    <input
      type="text"
      placeholder="Search countries"
      aria-label="Search for a country"
      value={value}
      onChange={handleChange}
    />
  );
}

export default SearchBar;