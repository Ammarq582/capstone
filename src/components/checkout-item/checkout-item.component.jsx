import { addItemsToCart, deleteItemFromCart, removeItemsFromCart } from '../../store/cart/cart.action.js';
import './checkout-item.styles.jsx'
import { CheckoutImageContainer, CheckoutItemContainer, CheckoutName, CheckoutPrice, CheckoutQuantity, CheckoutQuantityArrow, CheckoutQuantityValue, RemoveButton } from './checkout-item.styles.jsx';
import {useDispatch, useSelector} from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector.js';

const CheckoutItem = ({item}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const {imageUrl, name, price, quantity} = item;
    const totalPrice = quantity*price;


    const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItems, item));    
    const addItemHandler = () => dispatch(addItemsToCart(cartItems, item));    
    const removeItemHandler = () => dispatch(removeItemsFromCart(cartItems, item));    

    return(
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </CheckoutImageContainer> 
            
            <CheckoutName>{name}</CheckoutName>
            <CheckoutQuantity>
                <CheckoutQuantityArrow onClick={removeItemHandler}>
                    &#10094;
                </CheckoutQuantityArrow>
                <CheckoutQuantityValue>{quantity}</CheckoutQuantityValue> 
                <CheckoutQuantityArrow onClick={addItemHandler}>
                    &#10095;
                </CheckoutQuantityArrow>
            </CheckoutQuantity>
            <CheckoutPrice>${totalPrice}</CheckoutPrice>
            <RemoveButton onClick={deleteItemHandler}>&#10005;</RemoveButton>
            
        </CheckoutItemContainer>   
        )
}

export default CheckoutItem;