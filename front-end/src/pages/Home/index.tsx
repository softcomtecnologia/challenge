import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from 'services/api';
import {product} from 'types/types';
import { useEffect, useState } from 'react';
import {formatPrice} from 'utils/format';
import { useDispatch } from 'react-redux';
import { getLists, setCart } from 'store/actions/listActions';


type productData = {
    product:product[];
}
const Home = () => {
    const dispatch = useDispatch();

    const [productData, setProductData] = useState<productData>({
        product:[],
    });
    
    useEffect(() => {
        api.get('products')
         .then(response =>{
            const data = response.data as product[];
            const products1= data.map(x => x);
            setProductData({ product: products1});
        });
    }, []);
    useEffect(() => {
        dispatch(getLists());
      }, [dispatch]);
    
    const handleAddProduct =(prod:product) => {
        dispatch(setCart(prod));
    };
    return (
            <ProductList>
                {productData.product.map(prod => (
                    <li key={prod.id}>
                        <img src={prod.image} alt={prod.title} />
                        <strong>{prod.title}</strong>
                        <span>{formatPrice(prod.price)}</span>
                        <button type="button" onClick={() => handleAddProduct(prod)}>
                            <div>
                                <MdAddShoppingCart size={16} color="#fff" />
                         </div>
                            <span>ADICIONAR AO CARRINHO</span>
                        </button>
                    </li>
                ))}

            </ProductList>
        );
}
export default Home;