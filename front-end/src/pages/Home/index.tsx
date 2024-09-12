import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import api from 'services/api';
import { category, product } from 'types/types';
import { useEffect, useState } from 'react';
import { formatPrice } from 'utils/format';
import { useDispatch } from 'react-redux';
import { getLists, setCart } from 'store/actions/listActions';
import Categories from 'components/Categories';


type productData = {
    products: product[];
}
const Home = () => {
    const dispatch = useDispatch();

    const [productData, setProductData] = useState<productData>({
        products:[]
    });

    useEffect(() => {
        api.get('categories')
            .then(response => {
                const data = response.data as category[];
                const category = data.map(x => x);
                const p2 = category.map(x=>x.product);
                const p1 = Object.values(p2).flatMap(x=>x);
                setProductData({ products:p1 });
            });
    }, []);
    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    const handleAddProduct = (prod: product) => {
        dispatch(setCart(prod));
    };
    return (
        <>
                    <Categories />
                    <ProductList>
                    {productData.products.map(prod => (                        
                        <li key={prod.price}>
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
              
          </>  
        
    );
}
export default Home;