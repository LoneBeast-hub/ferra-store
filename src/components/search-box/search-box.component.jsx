import { SearchFilter } from "./search-box.styles";

export const SearchBox = ({placeholder, handleChange}) => {
    return <SearchFilter className="search" type='search' placeholder={placeholder}
          onChange={handleChange}
    />;
}