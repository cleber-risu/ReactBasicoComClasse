import "./style.css";

export const SearchInput = ({ searchValue, handleChange }) => (
   <input
      type="search"
      className="search-input"
      placeholder="Type your search"
      onChange={handleChange}
      value={searchValue}
   />
);
