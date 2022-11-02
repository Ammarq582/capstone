import { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';
import CategoriesPreview from '../../components/categories-preview/categories-preview.component';

const CategoriesContainer = () => {
    const {categoriesMap} = useContext(CategoriesContext);
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