import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.jsx';

const totalPrice = (cartItems) => {
    return cartItems.reduce((prev, item) => {
        return prev + (item.quantity * item.price);
    }, 0)
}

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }



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

            <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
            
                
            
            
        </div>

    )
};

export default CartDropdown;