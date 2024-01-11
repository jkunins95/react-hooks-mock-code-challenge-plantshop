import React from "react";

// 2. add searchTerm as a prop
function Search({ searchTerm, onUpdateSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        // 3. synchronize the value of the searchTerm from the prop
        value={searchTerm}
        onChange={(e) => onUpdateSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
