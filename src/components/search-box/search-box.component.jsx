import "./search-box.css";
const SearchBox = ({className, placeholder, onChangeHandeler}) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandeler}
  />
);

export default SearchBox;
