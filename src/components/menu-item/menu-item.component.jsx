import { useNavigate } from 'react-router-dom';

// styled Component
import { MenuItemContainer, BgImageContainer, ContentContainer, TitleContainer, SubtitleContainer } from './menu-item.styles';

// menuItem with destructured props
export const MenuItem = ({ title, imgUrl, size, routeName }) => {
    let navigate = useNavigate();
    return(
        <MenuItemContainer size={size} onClick={ 
            () => {
                navigate(routeName);
            }
         } >
            <BgImageContainer
                imageUrl={imgUrl}
            />
            <ContentContainer>
                <TitleContainer> { title.toUpperCase() } </TitleContainer>
                <SubtitleContainer>SHOP NOW</SubtitleContainer>
            </ContentContainer>
        </MenuItemContainer>
    );
}