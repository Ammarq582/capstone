import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const totalPrice = (cartItems) => {
    return cartItems.reduce((prev, item) => {
        return prev + (item.quantity * item.price);
    }, 0)
}

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.length
                    ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                    :
                    <span className='empty-message'>Cart is Empty</span>
                }
                
            </div>
            
            
                {
                    cartItems.length ?
                    <div>Total Price = ${totalPrice(cartItems)}</div>
                    :
                    null
                }
            
            
            <Button>Go to checkout</Button>
        </div>

    )
};

export default CartDropdown;