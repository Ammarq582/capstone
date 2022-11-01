import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.jsx'
import { CheckoutImageContainer, CheckoutItemContainer, CheckoutName, CheckoutPrice, CheckoutQuantity, CheckoutQuantityArrow, CheckoutQuantityValue, RemoveButton } from './checkout-item.styles.jsx';

const CheckoutItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item;
    const totalPrice = quantity*price;

    const {addItemsToCart, removeItemsFromCart, deleteItemFromCart} = useContext(CartContext);

    const deleteItemHandler = () => deleteItemFromCart(item);    
    const addItemHandler = () => addItemsToCart(item);    
    const removeItemHandler = () => removeItemsFromCart(item);    

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