import { ReactComponent as Logo } from '../../assets/crown.svg';
// redux related
import { connect } from 'react-redux';
import { selectShowFilterDropdown } from '../../redux/items-filter/items-filter.selectors';
import { hideFilterDropdown } from '../../redux/items-filter/items-filter.actions';
// reselect related
import { createStructuredSelector } from 'reselect';
import { selectHideCartDropdown } from '../../redux/cart/cart.selectors';
// components
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
// Css in Js styles
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';


const Header = ({ hideCartDropdown, showFilterDropdown, hideFilterDropdown }) => {
    return(
        <HeaderContainer onClick={() => {
            if(showFilterDropdown) {
              return(hideFilterDropdown())
            } else {
              return ;
            }
          }}
        >
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
    hideCartDropdown: selectHideCartDropdown,
    showFilterDropdown: selectShowFilterDropdown
})

const mapDispatchToProps = (dispatch) => {
return({
    hideFilterDropdown: () => {
    return(dispatch(hideFilterDropdown()))
    }
})
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);