import React from "react";

const SearchBar = ({
  setQuery,
  query,
  onRender,
  onShowBtn,
  setPage,
  onLoading,
}) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    onLoading(true);
    onRender(true);
    setTimeout(() => onShowBtn(true), 800);
  };
  return (
    <header>
      <form className="search-container" onSubmit={handleSearch}>
        <div className="search-image-left">
          <i className="bi bi-image image-icon"></i>
        </div>
        <input
          className="search-field"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        ></input>
        <button type="submit" className="search-btn">
          <i className="bi bi-search search-icon"></i>
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
