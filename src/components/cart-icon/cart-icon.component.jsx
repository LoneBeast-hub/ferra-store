import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// styled Components
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

const CartIcon = () => {
    return(
        <CartIconContainer>
            <ShoppingIconContainer as={ShoppingIcon} className='shopping-icon' />
            <ItemCountContainer className='item-count'>0</ItemCountContainer>
        </CartIconContainer>
    );
}

export default CartIcon;