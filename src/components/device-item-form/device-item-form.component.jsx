import {
    FormContainer, InputFieldWrapper, 
    InputContainer, LabelContainer,
    FileInputsWrapper, UndoButton, 
    UploadButton, UploadImgBtn, TitleContainer
} from './device-item-form.styles';
import { CustomButton } from '../custom-button/custom-button.component';
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '../../firebase/firebase.utils';
import { connect } from 'react-redux/es/exports';
import { selectDeviceRouteNameToCRUDItem } from '../../redux/admin/admin.selectors';
import { createStructuredSelector } from "reselect";
import { v4 } from 'uuid';
import { selectDeviceItemEditData } from '../../redux/admin/admin.selectors';
import { getDeviceItemId } from '../../redux/admin/admin.actions';

const DeviceItemForm = ({ 
    formId, edit, children, handleSubmit, routeName, isFirstItem, 
    deviceItemEditData, getDeviceItemId
}) => {
    const [imgUpload, setImgUpload] = useState(null);
    const [imgPath, setImgPath] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [uploadDisabled, setUploadDisabled] = useState(false);
    const [undoUploadDisabled, setUndoUploadDisabled] = useState(true);

    // If we want to edit
    useEffect(() => {
        const checkForEdit = () => {
            if(edit) {
                const { imgPath, imgUrl, id } = deviceItemEditData;
                getDeviceItemId(id);
                setImgPath(imgPath);
                setImgUrl(imgUrl);
        
                if(imgPath.length > 0 || imgUrl.length > 0 ) {
                    // setImgUpload(null);
                    setUploadDisabled(true);
                    setUndoUploadDisabled(false);
                }
            }
        }
        checkForEdit()
    }, [edit, deviceItemEditData, getDeviceItemId])
    
    const handleImgUploadChange = (e) => {
        setImgUpload(e.target.files[0]);
    }
    const uploadImg = (e) => {
        e.preventDefault();
        if(imgUpload === null) {
            return ;
        }

        // reference to image path
        const imgRef = ref(storage, `images/${routeName}/${imgUpload.name + v4()}`);
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
            <TitleContainer> {edit? 'EDIT' : 'ADD'} DEVICE ITEM</TitleContainer>
            {isFirstItem? <InputFieldWrapper>
                <LabelContainer>Title</LabelContainer>
                <InputContainer
                    name="deviceItemTitle"
                    required
                />
            </InputFieldWrapper> : null}
            {isFirstItem? <InputFieldWrapper>
                <LabelContainer>Route name</LabelContainer>
                <InputContainer
                    name="deviceItemRouteName"
                    required
                />
            </InputFieldWrapper> : null}
            <InputFieldWrapper>
                <LabelContainer>Brand</LabelContainer>
                <InputContainer
                    name="deviceItemBrand"
                    required
                    defaultValue={
                        edit?
                            deviceItemEditData.brand
                        : undefined
                    }
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Description</LabelContainer>
                <InputContainer
                    name="deviceItemDescription"
                    required
                    defaultValue={
                        edit?
                            deviceItemEditData.description
                        : undefined
                    }
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Name</LabelContainer>
                <InputContainer
                    name="deviceItemName"
                    required
                    defaultValue={
                        edit?
                            deviceItemEditData.name
                        : undefined
                    }
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Price</LabelContainer>
                <InputContainer
                    name="deviceItemPrice"
                    type="number"
                    required
                    defaultValue={
                        edit?
                            deviceItemEditData.price
                        : undefined
                    }
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Image Path</LabelContainer>
                <InputContainer
                    name="deviceItemImgPath"
                    value={imgPath}
                    readOnly
                />
            </InputFieldWrapper>
            <InputFieldWrapper>
                <LabelContainer>Image Url</LabelContainer>
                <InputContainer
                    name="deviceItemImgUrl"
                    value={imgUrl}
                    readOnly
                />
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
    routeName: selectDeviceRouteNameToCRUDItem,
    deviceItemEditData: selectDeviceItemEditData
})

const mapDispatchToProps = (dispatch) => {
    return({
        getDeviceItemId: (deviceItemId) => {
            return dispatch(getDeviceItemId(deviceItemId))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceItemForm);