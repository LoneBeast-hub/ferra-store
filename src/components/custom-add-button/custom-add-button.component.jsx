import { CustomAddButtonContainer, AddIcon, IconWrap } from "./custom-add-button.styles";
import { FaPlus } from 'react-icons/fa';

const CustomAddButton = () => {
    return(
        <CustomAddButtonContainer>
            <IconWrap>
                <AddIcon as={FaPlus}/>
            </IconWrap>
        </CustomAddButtonContainer>
    )
}

export default CustomAddButton;