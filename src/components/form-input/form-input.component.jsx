import { GroupContainer, FormInputContainer, LabelContainer } from './form-input.styles';

export const FormInput = ({ handleChange, label, ...otherProps }) => {
    return(
        <GroupContainer>
            <FormInputContainer onChange={handleChange} {...otherProps} />
            {
                label?
                (<LabelContainer {...otherProps} >
                    {label}
                </LabelContainer>) : null
            }
        </GroupContainer>
    );
}