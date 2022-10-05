import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
    setProducts: () => null
});


export const ProductsProvider = ({children}) => {
    const [shopProducts, setShopProducts] = useState(SHOP_DATA);
    const value = {shopProducts, setShopProducts};
    console.log(children);
    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}

