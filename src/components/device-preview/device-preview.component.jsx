import DeviceItem from '../device-item/device-item.component';
import { DevicePreviewContainer, TitleContainer, PreviewContainer } from './device-preview.styles';
import { Link } from 'react-router-dom';

// create & export Device preview
export const DevicePreview = ({title, items, routeName}) => {
    return(
        // Device preview
        <DevicePreviewContainer>
            {/* title */}
            <TitleContainer as={Link} to={routeName} > { title } </TitleContainer>
            {/* preview items */}
            <PreviewContainer>
                {
                    items.filter((item, index) => index < 4).map((item) => {
                        return(
                            <DeviceItem key={ item.id }  item={item} />
                        );
                    })
                }
            </PreviewContainer>
        </DevicePreviewContainer>
    );
}