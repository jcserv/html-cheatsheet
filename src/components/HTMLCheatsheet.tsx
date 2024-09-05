import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CategoryList from "./CategoryList";
import { htmlCategories } from "../data/htmlCategories";


const HTMLCheatsheet: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandAll, setExpandAll] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const toggleExpandAll = () => {
    setExpandAll(!expandAll);
  };

  return (
    <div className="html-cheatsheet">
      <div className="search-bar-container">
        <span>
          <SearchBar onSearch={handleSearch} />
        </span>
        <span>
          <button onClick={toggleExpandAll}>
            {expandAll ? "Collapse All" : "Expand All"}
          </button>
        </span>
      </div>
      <CategoryList
        categories={htmlCategories}
        searchQuery={searchQuery}
        expandAll={expandAll}
      />
    </div>
  );
};

export default HTMLCheatsheet;
