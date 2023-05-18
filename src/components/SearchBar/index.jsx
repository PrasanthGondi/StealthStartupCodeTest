import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <form className="searchBar flex">
        <AiOutlineSearch className="searchIcon" />
        <input
          type="search"
          placeholder="Search by name"
          className="searchInput"
        />
      </form>
    </div>
  );
};

export default SearchBar;
