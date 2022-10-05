import './shop.styles.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

const Shop = () => {
    const {shopProducts} = useContext(ProductsContext);
    return (
        <div className='products-container'>
            {shopProducts.map(product => {
                return <ProductCard product={product} key={product.id} />
            })}
        </div>
      )
}

export default Shop;