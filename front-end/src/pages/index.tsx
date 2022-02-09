import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Modal from '../components/Modal';
import { CartContext } from '../contexts/cartContext';
import Cart2 from '../../public/images/cart2.svg';
import Search from '../../public/images/search.svg';
import Arrow from '../../public/images/arrow.svg';
import Close from '../../public/images/close.svg';
import Image from 'next/image';


type VariablesTypes = {
  openModal: any,
  showModal: boolean,
  closeModal: any,
  subtractOne: any,
  addOne: any,
  quantity: number,
  addCart: any
}

const Home: NextPage = () => {

  const [productData, setProductData] = useState([] as any);
  const [productId, setproductId] = useState({} as any);
  const [searchField, setSearchField] = useState('');
  const [searchResult, setSearchResult] = useState([] as any);
  const [showSearch, setShowSearch] = useState(false);
  const baseURL = 'https://backendecommercenode.herokuapp.com/api';

  const { openModal, showModal, closeModal, subtractOne, addOne, quantity, addCart } = useContext(CartContext) as VariablesTypes
  const getProducts = async () => {
    let res = await axios.get(`${baseURL}/products`);
    let json = res.data
    setProductData(json)
  }
  
  const getProductId = async (id: string) => {
    let res = await axios.get(`${baseURL}/products/${id}`);
    let json = res.data;
    setproductId([json])
    openModal()
  }
  
  
  const getSearch = async (search: string, e: any) => {
    e.preventDefault()
    if (searchField !== '') {
      let res = await axios.get(`${baseURL}/products/search/${search}`)
      let json = res.data;
      console.log(json.product[0])
      setSearchResult(json)
      setShowSearch(true);
    } else {
      setShowSearch(false)
    }
  }
  const goToHome = () => {
    setShowSearch(false)
  }
  useEffect(() => {
    getProducts()

  }, [productId]);




  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Loja virtual de produtos para pet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout goHome={() => goToHome()}>

        <main className={styles.main}>
          <form onSubmit={(e) => getSearch(searchField, e)}>
            <div className={styles.search}>
              <input
                type="search"
                placeholder='O que você procura?'
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)} />
              <button onClick={(e) => getSearch(searchField, e)}>
                <div className={styles.searchImage}> 
                  <Image src={Search} />
                </div>
              </button>
            </div>
          </form>
          {showSearch ?
            <section className={styles.section}>
              <div className={styles.productListSearch}>
                {searchResult.product.map((item: any, index: number) => (
                  <div key={index} onClick={() => getProductId(item._id)}>
                    <div className={styles.productCard}>
                      <img src={item.productImage} className={styles.productImg} />
                      <div className={styles.productInfo}>
                        <span className={styles.productTitle}>{item.productTitle}</span>
                        <div className={styles.secondBlock}>
                          <span className={styles.productPrice}>R${item.productPrice.toFixed(2).replace('.', ',')}</span>
                          <Image src={Cart2} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            :
            <>
              <section className={styles.section}>
                <span className={styles.category}>Sugestão do Vendedor</span>
                <div className={styles.productList} >
                  {productData.map((item: any, index: number) => (
                    <>
                      {item.productCategory == 'sugestão do vendedor' &&
                        <div key={index} onClick={() => getProductId(item._id)}>
                          <div className={styles.productCard}>
                            <img src={item.productImage} className={styles.productImg} />
                            <div className={styles.productInfo}>
                              <span className={styles.productTitle}>{item.productTitle}</span>
                              <div className={styles.secondBlock}>
                                <span className={styles.productPrice}>R${item.productPrice.toFixed(2).replace('.', ',')}</span>
                                <Image src={Cart2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </>
                  ))}
                </div>
              </section>
              <section className={styles.section}>
                <span className={styles.category}>Brinquedos</span>
                <div className={styles.productList}>
                  {productData.map((item: any, index: number) => (
                    <>
                      {item.productCategory == 'brinquedos' &&

                        <div key={index} onClick={() => getProductId(item._id)}>
                          <div className={styles.productCard}>
                            <img src={item.productImage} className={styles.productImg} />
                            <div className={styles.productInfo}>
                              <span className={styles.productTitle}>{item.productTitle}</span>
                              <div className={styles.secondBlock}>
                                <span className={styles.productPrice}>R${item.productPrice.toFixed(2).replace('.', ',')}</span>
                                <Image src={Cart2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </>
                  ))}
                </div>
              </section>
              <section className={styles.section}>
                <span className={styles.category}>Rações</span>
                <div className={styles.productList}>
                  {productData.map((item: any, index: number) => (
                    <>
                      {item.productCategory == 'rações' &&

                        <div key={index} onClick={() => getProductId(item._id)}>
                          <div className={styles.productCard}>
                            <img src={item.productImage} className={styles.productImg} />
                            <div className={styles.productInfo}>
                              <span className={styles.productTitle}>{item.productTitle}</span>
                              <div className={styles.secondBlock}>
                                <span className={styles.productPrice}>R${item.productPrice.toFixed(2).replace('.', ',')}</span>
                                <Image src={Cart2} />
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </>
                  ))}
                </div>
              </section>
            </>
          }

        </main>
        {showModal &&
          <>
            {productId.map((item: any, index: number) => (
              <Modal key={index}>
                <div className={styles.closeModal} onClick={closeModal} >
                  <div className={styles.arrow}>
                    <Image src={Arrow}/>
                  </div>
                  <p className={styles.closeModalMobile}>Voltar</p>
                  <div className={styles.closeIcon}>
                    <Image  src={Close}  />
                  </div>
                </div>
                
                <div className={styles.modalProduct}>
                  <img src={item.product.productImage} />
                  <div className={styles.modalProductInfo}>
                    <h2>{item.product.productTitle}</h2>
                    <div className={styles.description}>

                      <p>{item.product.productDescription &&
                        item.product.productDescription.split('-').map((des: string, i: number) => (
                          <ul key={index}>
                            {i > 0 &&
                              <li>- {des}</li>
                            }
                          </ul>
                        ))}</p>

                    </div>
                    <div className={styles.comments}>
                      <label>
                        <div>
                          Observações: <span>0/500</span>
                        </div>
                        <div className={styles.input}>
                          <textarea />
                        </div>
                      </label>
                    </div>
                    <div className={styles.moreInfos}>
                      <div className={styles.quantity}>
                        <div className={styles.minusSign} onClick={subtractOne}>-</div>
                        <span>{quantity}</span>
                        <div className={styles.plusSign} onClick={addOne}>+</div>
                      </div>
                      <div className={styles.add} onClick={() => addCart(item.product.productPrice, quantity, item.product._id)}>
                        <span>Adicionar</span>
                        <span>R${quantity <= 1 ?
                          item.product.productPrice.toFixed(2).replace('.', ',')
                          :
                          (item.product.productPrice * quantity).toFixed(2).replace('.', ',')
                        }</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal>
            ))}
          </>
        }
      </Layout>


    </div>
  )
}

export default Home
