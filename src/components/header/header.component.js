import { ReactComponent as Logo } from '../../assets/crown.svg';
// redux related
import { connect } from 'react-redux';
// reselect related
import { createStructuredSelector } from 'reselect';
import { selectHideCartDropdown } from '../../redux/cart/cart.selectors';
// components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// Css in Js styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import { selectCurrentUser, selectAdminId, selectCurrentUserId } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ 
    hideCartDropdown, currentUser, signOutStart, adminId,
    currentUserId 
}) => {
    return(
        <HeaderContainer>
            <LogoContainer to='/' >
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                {
                    // show sign in or sign out depending on the currentUser state
                    currentUser?
                    <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                    :
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <OptionLink to='/shop'>SHOP</OptionLink>
                {
                    adminId === currentUserId?
                        <OptionLink to='/admin'>ADMIN</OptionLink>
                    : null
                }
                <CartIcon/>
            </OptionsContainer>
            {/* toggle cart drop down */}
            {hideCartDropdown? null: <CartDropdown/>}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    hideCartDropdown: selectHideCartDropdown,
    currentUser: selectCurrentUser,
    adminId: selectAdminId,
    currentUserId: selectCurrentUserId
})

const mapDispatchToProps = (dispatch) => {
    return({
        signOutStart: () => {
            return(dispatch(signOutStart()))
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);