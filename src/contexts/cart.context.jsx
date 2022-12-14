
import { createAction } from "../utils/reducer/reducer.utils";
import { createContext, useReducer } from "react";


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

const CART_ACTION_TYPES = {
    UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
}

const cartReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`unhandled type ${type}`)
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CartProvider = ({children}) => {
    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState(0);

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const {cartItems, cartCount, cartTotal, isCartOpen} = state;


    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
    }

    const updateCartItemsReducer = (newCartItems) => {
        const newCartCount = calculateCartCount(newCartItems);
        const newCartTotal = calculateCartTotal(newCartItems);
        dispatch(createAction(CART_ACTION_TYPES.UPDATE_CART_ITEMS, {
            cartItems: newCartItems,
            cartCount: newCartCount,
            cartTotal: newCartTotal
        }))
    }

    const deleteItemFromCart = (productToDelete) => {
        updateCartItemsReducer(deleteItem(cartItems, productToDelete))
    }

    
    
    const removeItemsFromCart = (productToRemove) => {
        updateCartItemsReducer(removeCartItem(cartItems, productToRemove))
    }


    const addItemsToCart = (productToAdd) => {
        updateCartItemsReducer(addCartItem(cartItems, productToAdd))
    }

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