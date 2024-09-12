import { CategoryList, Cat } from './styles';
import api from 'services/api';
import { category, } from 'types/types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getLists, setCategory } from 'store/actions/listActions';


type productData = {
    categories: category[];
}
const Categories = () => {
    const dispatch = useDispatch();

    const [productData, setProductData] = useState<productData>({
        categories: [],
    });

    useEffect(() => {
        api.get('categories')
            .then(response => {
                const data = response.data as category[];
                const category = data.map(x => x);
                setProductData({ categories: category });
            });
    }, []);
    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    const handleAddCategory = (cat: category) => {
        dispatch(setCategory(cat.id));
    };
    return (
        <>
                    <CategoryList >
                    <h2>Categorias:</h2>
                    <ul>
                    {productData.categories.map((cat)=>
                           
                            <Cat key={cat.title.toString()} to="/category">
                            <li  onClick={() => handleAddCategory(cat)}>
                            {cat.title}
                            </li>
                            </Cat>
                           
                            
                       )}
                    </ul> 
                    </CategoryList>
          </>  
        
    );
}
export default Categories;