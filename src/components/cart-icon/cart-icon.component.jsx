import "./cart-icon.styles.jsx";
import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon,
} from "./cart-icon.styles.jsx";

import {useSelector, useDispatch} from 'react-redux'
import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from '../../store/cart/cart.action'

const CartIcon = () => {

  const dispatch = useDispatch()

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  

  const toggleIsCartopen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartIconContainer onClick={toggleIsCartopen}>
      <StyledShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
