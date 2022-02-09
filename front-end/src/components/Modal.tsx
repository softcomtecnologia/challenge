import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';


const Modal: NextPage = (props)=>{
    
    return(
        <div className={styles.modal}>
                <div className={styles.modalBody}>
                    {props.children}
                </div>
        </div>
    )
}

export default Modal;