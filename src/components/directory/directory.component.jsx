import CategoryItem from '../category-item/category-item.component';
import './directory.styles.jsx';
import { DirectoryContainer } from './directory.styles.jsx';

const Directory = ({categories}) => {

    return(

        <DirectoryContainer>
        {categories.map(category => {
        return (
          <CategoryItem category={category} key={category.id} />
        )
        })}
      
        </DirectoryContainer>
    )
}

export default Directory;