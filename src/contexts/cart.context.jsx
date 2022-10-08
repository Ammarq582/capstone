
import { createContext, useState, useEffect } from "react";


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


const calculateCartCount = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total + item.quantity
    }, 0)
}

const calculateCartTotal = (cartItems) => {
    return cartItems.reduce((total, item) => {
        return total + (item.quantity * item.price);
    }, 0)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemsToCart: () => {},
    cartCount: 0,
    removeItemsFromCart: () => {},
    deleteItemFromCart: () => {},
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        setCartCount(calculateCartCount(cartItems));
    }, [cartItems]);

    useEffect(() => {
        setCartTotal(calculateCartTotal(cartItems));
    }, [cartItems]);

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteItem(cartItems, productToDelete));
    }
    
    const removeItemsFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }


    const addItemsToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }
    console.log(cartItems);

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemsToCart,
        cartCount,
        deleteItemFromCart,
        removeItemsFromCart,
        cartTotal
    };
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}