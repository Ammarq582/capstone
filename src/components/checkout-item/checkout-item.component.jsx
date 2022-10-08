import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss'

const CheckoutItem = ({item}) => {
    const {imageUrl, name, price, quantity} = item;
    const totalPrice = quantity*price;

    const {addItemsToCart, removeItemsFromCart, deleteItemFromCart} = useContext(CartContext);

    const deleteItemHandler = () => deleteItemFromCart(item);    
    const addItemHandler = () => addItemsToCart(item);    
    const removeItemHandler = () => removeItemsFromCart(item);    

    return(
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div> 
            
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span> 
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>${totalPrice}</span>
            <div className='remove-button' onClick={deleteItemHandler}>&#10005;</div>
            
        </div>   
        )
}

export default CheckoutItem;