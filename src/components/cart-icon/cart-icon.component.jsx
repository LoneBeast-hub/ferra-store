import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
// redux related
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../redux/cart/cart.actions';
// styled Components
import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';
// reselect
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartDropdown, total }) => {
    return(
        <CartIconContainer onClick={toggleCartDropdown}>
            <ShoppingIconContainer as={ShoppingIcon} className='shopping-icon' />
            <ItemCountContainer className='item-count'> {total} </ItemCountContainer>
        </CartIconContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    total: selectCartItemsCount
})

const mapDispatchToProps = (dispatch) => {
    return({
        toggleCartDropdown: () => {
            return(dispatch(toggleCartDropdown()))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);