import { createContext, useState, ReactNode} from "react";

interface ProductProviderProps {
    children: ReactNode;
}
interface ConxtetData {
    productCart: number;
    setProductCart: React.Dispatch<React.SetStateAction<number>>;
    productValue: number;
    setProductValue: React.Dispatch<React.SetStateAction<number>>;

}

export const ProductContext = createContext({} as ConxtetData);

export function ProductProvider({children}: ProductProviderProps) {
    const [productCart, setProductCart] = useState(0);
    const [productValue, setProductValue] = useState(0);

    

    return(
        <ProductContext.Provider value={{productCart, setProductCart, productValue, setProductValue}}>
            {children}
        </ProductContext.Provider>
    );
}