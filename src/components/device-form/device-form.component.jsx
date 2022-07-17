import {
    FormContainer, InputFieldWrapper, 
    InputContainer, LabelContainer,
    FileInputsWrapper, UndoButton, 
    UploadButton, UploadImgLabel
} from './device-form.styles';
import { CustomButton } from '../custom-button/custom-button.component';

const DeviceForm = ({ formId, children, handleSubmit }) => {
    return(
        <FormContainer id={formId} onSubmit={handleSubmit}>
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
            <InputFieldWrapper>
                <LabelContainer>Route path</LabelContainer>
                <InputContainer
                 name="routePath"
                 required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Image</LabelContainer>
                <InputContainer
                 name="deviceImgUrl"
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

export default DeviceForm;