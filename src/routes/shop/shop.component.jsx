import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { setCategories } from "../../store/categories/categories.action";
import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import CategoriesContainer from "../categories-container/categories-container.component";
import Category from "../category/category.component";


const Shop = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoriesArray = await getCategoriesAndDocuments();
            dispatch(setCategories(categoriesArray));
        }
        getCategoryMap();
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesContainer/>} />
            <Route path=":category" element={<Category/>} />
        </Routes>
    )
}

export default Shop;