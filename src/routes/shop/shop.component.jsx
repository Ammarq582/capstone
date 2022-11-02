import { Routes, Route } from "react-router-dom";
import CategoriesContainer from "../categories-container/categories-container.component";
import Category from "../category/category.component";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesContainer/>} />
            <Route path=":category" element={<Category/>} />
        </Routes>
    )
}

export default Shop;