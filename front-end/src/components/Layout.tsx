import styles from '../styles/Home.module.css';
import Footer from './Footer';
import Header from './HeaderComponent';

type Props = {
    children: any,
    goHome: any
}

const Layout = (props: Props)=>{
    return(
        <div className={styles.layout}>
                <Header goHome={props.goHome}/>
                    {props.children}
                <Footer/>
        </div>
    )
}

export default Layout;