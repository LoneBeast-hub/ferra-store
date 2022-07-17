import {
    FormContainer, InputFieldWrapper, 
    InputContainer, LabelContainer,
    FileInputsWrapper, UndoButton, 
    UploadButton, UploadImgLabel, TitleContainer
} from './device-item-form.styles';
import { CustomButton } from '../custom-button/custom-button.component';

const DeviceItemForm = ({ formId, edit, children, handleSubmit }) => {
    return(
        <FormContainer id={formId} onSubmit={handleSubmit}>
            <TitleContainer> {edit? 'EDIT' : 'ADD'} DEVICE ITEM</TitleContainer>
            <InputFieldWrapper>
                <LabelContainer>Title</LabelContainer>
                <InputContainer
                    name="deviceItemTitle"
                    required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Route name</LabelContainer>
                <InputContainer
                    name="deviceItemRouteName"
                    required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Brand</LabelContainer>
                <InputContainer
                    name="brand"
                    required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Description</LabelContainer>
                <InputContainer
                    name="description"
                    required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Name</LabelContainer>
                <InputContainer
                    name="name"
                    required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Price</LabelContainer>
                <InputContainer
                    name="price"
                    type="number"
                    required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Image</LabelContainer>
                <InputContainer
                    name="deviceItemImgUrl"
                    required
                />
                <FileInputsWrapper>
                    <UploadImgLabel htmlFor="deviceImgUpload">
                        Upload
                    </UploadImgLabel>
                    <UploadButton
                        id="deviceImgUpload"
                        name="deviceImgUpload"
                        type="file"
                    />
                    <UndoButton as={CustomButton}
                        bgColor='#f05435'
                        border= 'none'
                        color='#fff'
                        bgColorHover='#d13111'
                    >
                        Undo
                    </UndoButton>
                </FileInputsWrapper>
            </InputFieldWrapper>
            {children}
        </FormContainer>
    )
}

export default DeviceItemForm;