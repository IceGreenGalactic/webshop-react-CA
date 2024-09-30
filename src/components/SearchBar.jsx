import React, { useState } from "react";
import { Button } from "../App.styles";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="input-group mb-4 w-50 m-auto">
      <input
        type="text"
        placeholder="Search for products..."
        className="form-control"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button className="btn btn-primary">Search</Button>
    </div>
  );
};

export default SearchBar;
