import ProductCard from '../product-card/product-card.component';
import './categories-preview.styles.jsx';
import { CategoriesPreviewContainer, Preview, Title } from './categories-preview.styles.jsx';

const CategoriesPreview = ({title, products}) => {
    return(
    <CategoriesPreviewContainer>
        <h2>
            <Title to={title}>{title.toUpperCase()}</Title>
        </h2>
        <Preview>
        {
            products.filter((_, idx) => idx < 4).map(product => {
                return <ProductCard product={product} key={product.id} />
            })
        }
        </Preview>
        
    </CategoriesPreviewContainer>
    )
}

export default CategoriesPreview;