import { addItemsToCart } from '../../store/cart/cart.action';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import './product-card.styles.jsx';
import { Footer, ProductCardContainer, ProductCardName, ProductCardPrice } from './product-card.styles.jsx';
import {useDispatch, useSelector} from 'react-redux'
import {selectCartItems} from '../../store/cart/cart.selector'


const ProductCard = ({product}) => {
    const dispatch = useDispatch();

    const cartItems = useSelector(selectCartItems)

    const {name, imageUrl, price} = product;

    const addProductToCart = () => {
        dispatch(addItemsToCart(cartItems, product));
        console.log(addItemsToCart(cartItems, product));
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