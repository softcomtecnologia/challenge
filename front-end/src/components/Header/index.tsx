import React, { useEffect } from 'react';
import { Cart, Container } from './styles'
import { Link } from 'react-router-dom'
import logo from 'assets/img/Lojinha.svg'
import { MdShoppingBasket } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store';
import { getLists } from 'store/actions';
import { formatPrice } from 'utils/format';

const Header = () => {
    const dispatch = useDispatch();
    const cartSize  = useSelector((state: RootState) => state.list.products);
    useSelector((state: RootState) => state.list.amount);
    const total = cartSize.reduce((total, product) => {
        return total + product.price * product.amount;
    }, 0);

    useEffect(() => {
        dispatch(getLists());
      }, [dispatch]);
      
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Lojinha" />
            </Link>
            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize.length} itens</span>
                    <strong>{formatPrice(total)}</strong>
                </div>
                <MdShoppingBasket size={70} color="#fff"></MdShoppingBasket>
            </Cart>
        </Container>
    )
}
export default Header;