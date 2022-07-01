import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

// styled Components
import { CheckoutItemContainer, ImageContainer, ImgContainer, NameContainer, QuantityContainer, ArrowContainer, ValueContainer, RemoveButtonContainer, PriceContainer } from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
    const {imgUrl, price, name, quantity} = cartItem;
    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <ImgContainer src={imgUrl} alt="item" />
            </ImageContainer>
            <NameContainer> {name} </NameContainer>
            <QuantityContainer>
                <ArrowContainer onClick={() => {
                    removeItem(cartItem)
                }} >&#10094;</ArrowContainer>
                <ValueContainer className="value">{quantity}</ValueContainer>
                <ArrowContainer className='arrow' onClick={() => {
                    addItem(cartItem)
                }} >&#10095;</ArrowContainer>
            </QuantityContainer>
            <PriceContainer> {price} </PriceContainer>
            <RemoveButtonContainer onClick={() => {
                return(clearItem(cartItem));
            }} > &#10005; </RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = (dispatch) => {
    return({
        clearItem: (item) => {
            return(dispatch(clearItemFromCart(item)))
        },
        removeItem: (item) => {
            return(dispatch(removeItem(item)))
        },
        addItem: (item) => {
            return(dispatch(addItem(item)))
        }
    })
}

export default connect(null, mapDispatchToProps)(CheckoutItem);