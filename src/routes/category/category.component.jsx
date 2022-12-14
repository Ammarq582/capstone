import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/categories.selector';
import './category.styles.jsx';
import { CategoryContainer, Title } from './category.styles.jsx';

const Category = () => {

    const {category} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return(
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {
                    products && products.map(product => <ProductCard product={product}/>)
                }
            </CategoryContainer>
        </Fragment>
    )
}

export default Category;