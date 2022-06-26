
import { CustomButtonContainer } from './custom-button.styles';

export const CustomButton = ({ children, ...props }) => {
    return(
        <CustomButtonContainer {...props}>
            {children}
        </CustomButtonContainer>
    );
}