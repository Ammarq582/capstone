import { useNavigate } from 'react-router-dom';
import './directory-item.styles.jsx'
import { BackgroundImage, BodyContainer, CategoryContainer } from './directory-item.styles.jsx';


const DirectoryItem = ({category}) => {
    const {title, imageUrl, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)
  
    return(
      <CategoryContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <BodyContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </BodyContainer>
      </CategoryContainer>
    )
}

export default DirectoryItem;