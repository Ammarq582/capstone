import { Fragment } from 'react';

import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const CategoriesContainer = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map(title => {
                    const products = categoriesMap[title];
                    return (
                        <CategoriesPreview products={products} title={title} key={title} />
                    )
                })
            }
        </Fragment>
      )
}

export default CategoriesContainer;