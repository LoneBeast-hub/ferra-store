import { ReactComponent as Logo } from '../../assets/crown.svg';
// Cart
import CartIcon from '../cart-icon/cart-icon.component';

// Css in Js styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = () => {
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
        </HeaderContainer>
    );
}

export default Header;