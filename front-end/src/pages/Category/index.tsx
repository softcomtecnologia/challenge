import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';
import { category, product } from 'types/types';
import { formatPrice } from 'utils/format';
import { useDispatch, useSelector } from 'react-redux';
import { setCart } from 'store/actions/listActions';
import { RootState } from 'store';
import { useEffect, useState } from 'react';
import api from 'services/api';
import Categories from 'components/Categories';


const Category = () => {
    const dispatch = useDispatch();
    const category = useSelector((state: RootState) => state.list.category);

    //console.log(category)
    const [catData, setCatData] = useState<category>({
        id: 0,
        title: '',
        product:[] 

    });

    useEffect(() => {
        api.get(`categories/${category}`)
            .then(response => {
                setCatData(response.data);
            });
    }, [category]);

    const handleAddProduct = (prod: product) => {
        dispatch(setCart(prod));
    };
    return (
        
        <>

            <Categories />
            <ProductList>
                    {catData.product.map(prod => (                        
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
export default Category;