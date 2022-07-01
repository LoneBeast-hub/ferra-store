import { ItemsFilterContainer } from "./items-filter-dropdown.styles";

export const ItemsFilterDropdown = ({ children }) => {
    return(
        <ItemsFilterContainer>
            { children }
        </ItemsFilterContainer>
    );
}