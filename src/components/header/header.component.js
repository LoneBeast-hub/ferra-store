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


const Header = ({ hideCartDropdown }) => {
    return(
        <HeaderContainer>
            <LogoContainer to='/' >
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                <OptionLink to='/signin'>SIGN IN</OptionLink>
                <CartIcon/>
            </OptionsContainer>
            {/* toggle cart drop down */}
            {hideCartDropdown? null: <CartDropdown/>}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    hideCartDropdown: selectHideCartDropdown
})

export default connect(mapStateToProps)(Header);