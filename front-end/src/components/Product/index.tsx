import { Container, Separator } from "./styles"
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { BsSearch } from 'react-icons/bs';


import { Cards } from "../Cards";


interface ProductsData {
    id: number;
    amount: number;
    img: string;
    title: string;
    type: string;
    off?: string;
    description: string;

}



export function Product() {
    const [listProducts, setListProducts] = useState<ProductsData[]>([]);
    const [listToys, setListToys] = useState<ProductsData[]>([]);
    const [listBedsAndHouses, setListBedsAndHouses] = useState<ProductsData[]>([]);
    const [listCollars, setListCollars] = useState<ProductsData[]>([]);
    const [listBonesAndSnacks, setListBonesAndSnacks] = useState<ProductsData[]>([]);


    const [productSearch, setProductSearch] = useState('');
    //transições envolvendo carrinho
    useEffect(() => {
        api.get('/products')
            .then(response => setListProducts(response.data))

        api.get('/toys')
            .then(response => setListToys(response.data))

        api.get('/beds-and-houses')
            .then(response =>  setListBedsAndHouses(response.data))

        api.get('/collars')
            .then(response => setListCollars(response.data))

        api.get('/bones-and-snacks')
            .then(response => setListBonesAndSnacks(response.data))

    }, []);

    const filter = listProducts.filter((product) => product.title.toLowerCase().includes(productSearch))
    const filterToys = listToys.filter((product) => product.title.toLowerCase().includes(productSearch))
    const filterBedsAndHouses = listBedsAndHouses.filter((product) => product.title.toLowerCase().includes(productSearch))
    const filterCollars = listCollars.filter((product) => product.title.toLowerCase().includes(productSearch))
    const filterBonesAndSnacks = listBonesAndSnacks.filter((product) => product.title.toLowerCase().includes(productSearch))
    

    console.log(productSearch);

    return (
        <Container>
            <Separator>
                <div>
                    <BsSearch style={{ background: 'white' }} size={40} />
                    <input
                        placeholder='O que você procura?'
                        value={productSearch}
                        onChange={(event) => setProductSearch(event.target.value)}

                    />
                </div>
            </Separator>

            {filter.length !== 0 &&
                <Cards
                    title="Sugestão do vendedor"
                    data={filter}
                />
            }

            {filterToys.length !== 0 &&
                <Cards
                    title="Brinquedos"
                    data={filterToys}
                />    
            }

            {filterBedsAndHouses.length !== 0 &&
                 <Cards
                     title="Camas e Casinhas"
                     data={filterBedsAndHouses}
                />
            }
           
            {filterCollars.length !== 0 &&
                 <Cards
                    title="Coleiras"
                    data={filterCollars}
             />
            }
           
            {filterBonesAndSnacks.length !== 0 && 
                <Cards
                    title="Ossos e Petiscos"
                    data={filterBonesAndSnacks}
                /> 
            }

           

        </Container>
    );
}

