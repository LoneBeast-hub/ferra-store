import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CustomButton } from '../../components/custom-button/custom-button.component';
// Styled Component
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, CustomButtonContainer, WhatsappIcon } from './checkout.styles';
// react icon
import { FaWhatsapp } from 'react-icons/fa';

const Checkout = ({ cartItems, total }) => {
    return(
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlockContainer>
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer>
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {cartItems.map((cartItem) => {
                return(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            })}
            <TotalContainer>
                <span>Total: &#8358;{total} </span>
            </TotalContainer>
            <CustomButtonContainer 
             as={CustomButton}  
             bgColor='#25D366' 
             border='1px solid #075E54'
             bgColorHover='#075E54'
             color='#fff'
            >
                <WhatsappIcon as={FaWhatsapp} />
                Pay now
            </CustomButtonContainer>
        </CheckoutPageContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout);