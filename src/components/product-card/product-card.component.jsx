import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.styles.jsx';
import { Footer, ProductCardContainer, ProductCardName, ProductCardPrice } from './product-card.styles.jsx';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addItemsToCart} = useContext(CartContext);

    const addProductToCart = async () => {
        addItemsToCart(product)
    }

    return(
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <Footer>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>{price}</ProductCardPrice>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;