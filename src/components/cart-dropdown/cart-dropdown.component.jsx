// components
import { CartItem } from '../cart-item/cart-item.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { useNavigate } from 'react-router-dom';
// styled Components
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CustomButtonContainer } from './cart-dropdown.styles';
// redux related
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
// reselet
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ dispatch, cartItems }) => {
    let navigate = useNavigate();
    return(
        <CartDropdownContainer>
            <CartItemsContainer>
            {cartItems.length?
                    cartItems.map((cartItem) => {
                        return(<CartItem key={cartItem.id} item={cartItem} />)
                    }) :
                    <EmptyMessageContainer>Your Cart is empty</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CustomButtonContainer as={CustomButton}
             onClick={() => {
                navigate('/checkout');
                dispatch(toggleCartDropdown());
             }}
             bgColor='#000' 
             color='#fff'
             bgColorHover='#fff'
             colorHover='#000'
             border='none'
             borderHover='1px solid #000'
             >GO TO CHECKOUT</CustomButtonContainer>
        </CartDropdownContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);