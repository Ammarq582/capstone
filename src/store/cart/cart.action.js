import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) =>
createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);





const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToAdd.id
        );
    if(existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === productToAdd.id
            ?
            {...cartItem, quantity: cartItem.quantity + 1}
            :
            cartItem
            );
    } else {
        return [...cartItems, {...productToAdd, quantity: 1}];
    }    
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === productToRemove.id
        );
    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === productToRemove.id
        ?
        {...cartItem, quantity: cartItem.quantity - 1}
        :
        cartItem
        );
    }
    



const deleteItem = (cartItems, productToDelete) => {
    return cartItems.filter(cartItem => cartItem.id !== productToDelete.id);
}






export const deleteItemFromCart = (cartItems, productToDelete) => {
    const newCartItems = deleteItem(cartItems, productToDelete);
    return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems);
}



export const removeItemsFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems)
}


export const addItemsToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, newCartItems)
}