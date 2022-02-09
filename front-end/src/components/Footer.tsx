import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import LogoSoft from '../../public/images/logomarcaSoftcom.svg';
import socialsFacebook from '../../public/images/socialsFacebook.svg';
import socialsInstagram from '../../public/images/socialsInstagram.svg';
import socialsTweet from '../../public/images/socialsTweet.svg';
import socialsYt from '../../public/images/socialsYt.svg';
import Image from 'next/image';


const Footer: NextPage = () => {
    return (
        
        <footer className={styles.footer}>
                <Image src={LogoSoft}/>
                <Link href={'#'}>Políticas de Privacidade</Link>
                <Link href={'#'}>Termos de Uso</Link>
                <div className={styles.socials}>
                    <span>Nossas redes sociais</span>
                <div>
                    <div className={styles.socialIcon}>
                        <Image src={socialsFacebook} />
                    </div>
                    <div className={styles.socialIcon}>
                        <Image src={socialsInstagram} />
                    </div>
                    <div className={styles.socialIcon}>
                        <Image src={socialsTweet} />
                    </div>
                    <div className={styles.socialIcon}>
                        <Image src={socialsYt} />
                    </div>
                </div>

                </div>
        </footer>
    )
}

export default Footer;
