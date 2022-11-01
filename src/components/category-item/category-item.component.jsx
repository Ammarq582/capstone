import './category-item.styles.jsx'
import { BackgroundImage, BodyContainer, CategoryContainer } from './category-item.styles.jsx';


const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    return(
        <CategoryContainer>
          <BackgroundImage style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <BodyContainer>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </BodyContainer>
        </CategoryContainer>
    )
}

export default CategoryItem;