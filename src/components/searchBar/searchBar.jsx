import React from "react";
import "./searchBar.scss";

function SearchBar({ searchValue, handleSearchChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search ..."
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
