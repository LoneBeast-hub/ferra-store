import {
    FormContainer, InputFieldWrapper, 
    InputContainer, LabelContainer,
    FileInputsWrapper, UndoButton, 
    UploadButton, UploadImgBtn
} from './device-form.styles';
import { CustomButton } from '../custom-button/custom-button.component';
import { useState, useEffect } from 'react';
import { ref, deleteObject, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase/firebase.utils';
import { v4 } from 'uuid';
import { connect } from 'react-redux';
import { getDeviceTitle } from '../../redux/admin/admin.actions';
import { selectDeviceEditData } from '../../redux/admin/admin.selectors';
import { createStructuredSelector } from 'reselect';

const DeviceForm = ({ 
    formId, edit, children, handleSubmit, getDeviceTitle,
    deviceEditData
 }) => {
    const [imgUpload, setImgUpload] = useState(null);
    const [imgPath, setImgPath] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [uploadDisabled, setUploadDisabled] = useState(false);
    const [undoUploadDisabled, setUndoUploadDisabled] = useState(true);
    const [deviceTitle, setDeviceTitle] = useState('');

    // If we want to edit
    useEffect(() => {
        const checkForEdit = () => {
            if(edit) {
                const { imgPath, imgUrl, title } = deviceEditData;
                setImgPath(imgPath);
                setImgUrl(imgUrl);
                setDeviceTitle(title);
                getDeviceTitle(title);
        
                if(imgPath.length > 0 || imgUrl.length > 0 ) {
                    // setImgUpload(null);
                    setUploadDisabled(true);
                    setUndoUploadDisabled(false);
                }
            }
        }
        checkForEdit()
    }, [edit, deviceEditData, getDeviceTitle])

    const handleImgUploadChange = (e) => {
        setImgUpload(e.target.files[0]);
    }
    const uploadImg = (e) => {
        e.preventDefault();
        if(imgUpload === null) {
            return ;
        }

        // reference to image path
        const imgRef = ref(storage, `images/directory_images/${imgUpload.name + v4()}`);
        // upload image
        uploadBytes(imgRef, imgUpload)
        .then((response) => {
            setImgPath(response.metadata.fullPath);
            // get the image url
            getDownloadURL(ref(storage, response.metadata.fullPath))
            .then((url) => {
                setImgUrl(url);
            })
            alert('Img Upload successful!')
        })
        .catch((error) => {
          alert(`Error! Upload not successful: ${error}`)
        })
        setUploadDisabled(true);
        setUndoUploadDisabled(false);
    }
    const undoImgUpload = (e) => {
        e.preventDefault();
        // img ref
        const imgRef = ref(storage, imgPath);
        // delete img from storage
        deleteObject(imgRef)
        .then(() => {
          setImgUrl('');
          setImgPath('');
          setImgUpload(null);
          alert('Image Upload Undone!');
        })
        .catch((error) => {
          alert(`Error! Undo Upload Failed: ${error}`)
        })
        setUploadDisabled(false);
        setUndoUploadDisabled(true);
    }

    return(
        <FormContainer id={formId} onSubmit={handleSubmit}>
            <InputFieldWrapper>
                <LabelContainer>Title</LabelContainer>
                <InputContainer
                 name="deviceTitle"
                 onChange={(e) => {
                    setDeviceTitle(e.target.value);
                    getDeviceTitle(e.target.value);
                 }}
                 defaultValue={deviceTitle}
                 required
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Route name</LabelContainer>
                <InputContainer
                 name="deviceRouteName"
                 value={deviceTitle.toLowerCase().replaceAll(' ', '_')}
                 readOnly
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Route path</LabelContainer>
                <InputContainer
                 name="deviceRoutePath"
                 readOnly
                 value={`shop/${deviceTitle.toLowerCase().replaceAll(' ', '_')}`}
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Image Path</LabelContainer>
                <InputContainer
                 name="deviceImgPath"
                 value={imgPath}
                 readOnly
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Image Url</LabelContainer>
                <InputContainer
                 name="deviceImgUrl"
                 value={imgUrl}
                 readOnly
                />
                {/* styles needed */}
                <UploadButton
                    name="deviceImgUpload"
                    type="file"
                    accept='image/*'
                    onChange={handleImgUploadChange}
                />
                <FileInputsWrapper>
                    <UploadImgBtn
                     type='button'
                     onClick={uploadImg}
                     disabled={uploadDisabled}
                     >
                        Upload
                    </UploadImgBtn>
                    <UndoButton as={CustomButton}
                        bgColor='#f05435'
                        border= 'none'
                        color='#fff'
                        bgColorHover='#d13111'
                        type='button'
                        onClick={undoImgUpload}
                        disabled={undoUploadDisabled}
                    >
                        Undo
                    </UndoButton>
                </FileInputsWrapper>
            </InputFieldWrapper>
            {children}
        </FormContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    deviceEditData: selectDeviceEditData
})

const mapDispatchToProps = (dispatch) => {
    return({
        getDeviceTitle: (deviceTitle) => {
            return dispatch(getDeviceTitle(deviceTitle))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceForm);