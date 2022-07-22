import {
    FormContainer, InputContainer, 
    InputFieldWrapper, LabelContainer,
    TitleContainer
} from "./items-fields-form.styles";
import { connect } from 'react-redux';
import { selectDeviceTitle } from "../../redux/admin/admin.selectors";
import { createStructuredSelector } from 'reselect';
import { useState, useEffect } from "react";

const ItemsFieldsForm = ({ 
    formId, handleSubmit, children, deviceTitle
}) => {
    const [modDeviceTitle, setModDeviceTitle] = useState('');

    // get deviceTitle everytime it changes
    useEffect(() => {
        setModDeviceTitle(deviceTitle);
    }, [deviceTitle])
    return(
        <FormContainer id={formId} onSubmit={handleSubmit}>
            <TitleContainer>UPDATE ITEMS FIELDS</TitleContainer>
            <InputFieldWrapper>
                <LabelContainer>Title</LabelContainer>
                <InputContainer
                 name="deviceItemsTitle"
                 defaultValue={modDeviceTitle}
                 readOnly
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Route name</LabelContainer>
                <InputContainer
                 name="deviceItemsRouteName"
                 defaultValue={modDeviceTitle.toLowerCase().replaceAll(' ', '_')}
                 readOnly
                />
            </InputFieldWrapper>
            {children}
        </FormContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    deviceTitle: selectDeviceTitle
})

export default connect(mapStateToProps)(ItemsFieldsForm);