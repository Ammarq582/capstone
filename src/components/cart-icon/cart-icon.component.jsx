import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.jsx";
import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon,
} from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartopen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartopen}>
      <StyledShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
