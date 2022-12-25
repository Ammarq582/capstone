import './checkout.styles.jsx';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import { CheckoutContainer, CheckoutHeader, CheckoutTotal, HeaderBlock } from './checkout.styles.jsx';
import {useSelector} from 'react-redux'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector.js';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    

    
return(
    <CheckoutContainer>
        <CheckoutHeader>
            <HeaderBlock>
                <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
                <span>Remove</span>
            </HeaderBlock>
        </CheckoutHeader>
        {
        cartItems.map(item => {
            return <CheckoutItem key={item.id} item={item}/>
            })
        }
        <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
    </CheckoutContainer>
)
}

export default Checkout;