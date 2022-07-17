import {
    FormContainer, InputContainer, 
    InputFieldWrapper, LabelContainer,
    TitleContainer
} from "./items-fields-form.styles";

const ItemsFieldsForm = ({ formId, handleSubmit, children }) => {
    return(
        <FormContainer id={formId} onSubmit={handleSubmit}>
            <TitleContainer>UPDATE ITEMS FIELDS</TitleContainer>
            <InputFieldWrapper>
                <LabelContainer>Title</LabelContainer>
                <InputContainer
                 name="DeviceTitle"
                 required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Route name</LabelContainer>
                <InputContainer
                 name="DeviceRouteName"
                 required
                />
            </InputFieldWrapper>
            {children}
        </FormContainer>
    )
}

export default ItemsFieldsForm;