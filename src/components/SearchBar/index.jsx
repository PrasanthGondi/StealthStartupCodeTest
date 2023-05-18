import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <div className="searchBar flex">
        <AiOutlineSearch className="searchIcon" />
        <input
          type="search"
          placeholder="Search by name"
          className="searchInput"
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
