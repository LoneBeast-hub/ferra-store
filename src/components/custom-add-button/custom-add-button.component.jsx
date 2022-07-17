import { CustomAddButtonContainer, AddIcon, IconWrap } from "./custom-add-button.styles";
import { FaPlus } from 'react-icons/fa';

const CustomAddButton = ({handleClick}) => {
    return(
        <CustomAddButtonContainer onClick={handleClick}>
            <IconWrap>
                <AddIcon as={FaPlus}/>
            </IconWrap>
        </CustomAddButtonContainer>
    )
}

export default CustomAddButton;