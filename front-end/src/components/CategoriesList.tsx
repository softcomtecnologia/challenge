import styles from '../styles/Home.module.css';

const CategoriesList = () => {
    const handleCategory1 = ()=>{
        window.scrollTo({
            top: 400,
            behavior: 'smooth'
        })
    }
    const handleCategory2 = ()=>{
        window.scrollTo({
            top: 1425,
            behavior: 'smooth'
        })
    }
    const handleCategory3 = ()=>{
        window.scrollTo({
            top: 2474,
            behavior: 'smooth'
        })
    }
    return (
        <nav className={styles.categories}>
            <ul>
                <li onClick={handleCategory1}>Sugestão do Vendedor</li>
                <li onClick={handleCategory2}>Brinquedos</li>
                <li>Camas e Casinhas</li>
                <li>Coleiras</li>
                <li onClick={handleCategory3}>Rações</li>
                <li>Saúde</li>
            </ul>
        </nav>
    )
}

export default CategoriesList;