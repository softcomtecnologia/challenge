import { useContext } from 'react';
import { CartContext } from '../contexts/cartContext';
import styles from '../styles/Home.module.css';
import CategoriesList from './CategoriesList';
import Logomarca from '../../public/images/logomarca.svg';
import Opened from '../../public/images/opened.svg';
import Delivery from '../../public/images/delivery.svg';
import Cart from '../../public/images/cart.svg';
import Image from 'next/image';


type Props = {
    goHome: any
}
type CartTypes = {
    cartItems: any,
    cartValue: number
}
const Header = (props: Props) => {
    const {cartItems, cartValue}  = useContext(CartContext) as CartTypes
    
    return (
        
        <header className={styles.header}>
            <div className={styles.img}>
                <Image src={Logomarca} onClick={props.goHome} />
            </div>
            <div className={styles.establishment}>
                <div className={styles.info}>
                    <h2>Pet Friends Acessories</h2>
                    <span><div className={styles.img}>
                        <Image src={Opened}/>
                        </div>
                        Aberto agora</span>
                </div>
                <div className={styles.adress}>
                    <p>Avenida Rio Grande do Sul, 1520, Estados | 58030-021 | João Pessoa - PB</p>
                </div>
                <div className={styles.delivery}>
                    <p><Image src={Delivery}/><span>Delivery:</span> 35m - 1h:40m</p>
                    <p><span>Entrega:</span> À partir de R$3,00</p>
                </div>
            </div>
            <div className={styles.cart}>
                <div className={styles.cartImage}>
                    <Image src={Cart}/>
                </div>
                
                <div className={styles.cartItem}>
                    {cartItems.length > 1 ?
                        <span>{cartItems.length} Produtos no Carrinho</span>
                        :
                        <span>{cartItems.length} Produto no Carrinho</span>
                    }
                    
                    <span className={styles.price}>R${cartValue.toFixed(2).replace('.', ',')}</span>
                </div>
            </div>
            <CategoriesList/>
        </header>
    )
}

export default Header;
