import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';


createServer({
  routes() {
    this.namespace = 'api';

    this.get('/products', () => {
      return [
        {
          id: 1,
          title: 'Shampoo Sanol Dog - Pelos claros 500ML',
          img: 'https://a-static.mlcdn.com.br/618x463/shampoo-para-cachorro-sanol-pelos-claros-500ml/agropesc/454/369f32cb669333f3dc4a4f868d40a6cc.jpg',
          amount: 60.90,
          description: '-Shampoo para cachorros de pelos claros para banhos semanais, 500ML.'
        },
        {
          id: 2,
          title: 'Cama Londres Vermelha - Chics',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/1511316/8/1511316875_1GG.jpg',
          amount: 165.66,
          description: '-Cama para seu bichinho de estimação, seja ele gato ou cachorro, 100% algodão e na cor vermelha.'

        },

        {
          id: 3,
          title: 'Cama Londres Azul - Chicxs',
          img: 'https://images-americanas.b2w.io/produtos/01/00/img/2070443/4/2070443430_1GG.jpg',
          off: 'De R̶̶̶$̶̶̶3̶0̶0̶,̶̶̶3̶0̶',
          amount: 266.31,
          description: '-Cama para cachorro com tecido de alta resistência,encorpado e na cor azul.'

          
        },

        {
          id: 4,
          title: 'Comedouro para Pet - Melancia',
          img: 'https://static.riachuelo.com.br/RCHLO/13764900001/portrait/d5198f1a48c90a18b29c185d85566a14fe4a5d2f.jpg?imwidth=700',
          amount: 39.90,
          description: '-Produzido em porcelana, faciliza a alimentação do seu pet e facilita na higienização do produto.'

        },

        {
          id: 5,
          title: 'Beeps Shampoo - Melancia, 500ML',
          img: 'https://images.tcdn.com.br/img/img_prod/752354/shampoo_2_em_1_beeps_pet_society_500ml_2993_1_dc9f17a8d21d2234023d3b5bfa628959.jpg',
          amount: 37.50,
          description: '-Shampoo 2 em 1 Pet Society para cães e gatos de todas raças.'
        }

      ]
    });

    this.get('/toys', () => {
      return [
        {
          id: 6,
          title: 'Brinquedo mordedor pelúcia - Macaco rosa',
          img: 'https://www.petlove.com.br/images/products/214325/product/Brinquedo_Jambo_Mordedor_Pel%C3%BAcia_Macaco_Kelev_Rosa_1786688.jpg?1570546705',
          amount: 26.91,
          description: '-Um macaco rosa para seu pet com formato atrativo, mácio e resistente, fácil de trasnsportar.'

        },

        {
          id: 7,
          title: 'Mordedor de pelúcida Jacaré - Multi Squeaker',
          img: 'https://www.petlove.com.br/images/products/230776/product/Brinquedo_Mordedor_Pel%C3%BAcia_Jacar%C3%A9_Multi_Squeaker_2555550.jpg?1602099153',
          amount: 72.20,
          description: '-Com Cores vibrantes, melhora a atenção e perfeito para a socialização com pessoas e animais.'
        },

        {
          id: 8,
          title: 'Brinquedo Vinil Halteres Patinhas para Cães',
          img: 'https://www.petlove.com.br/images/products/232328/product/Brinquedo_Vinil_Halteres_Patinhas_para_C%C3%A3es_2562813_M.jpg?1605620063',
          amount: 13.65,
          description: '-Resistente, controla a ansiedade,material de qualidade e feito especialmente para cães!'
        },

        {
          id: 9,
          title: 'Brinquedo Interativo Pet & Go para Cães Azul',
          img: 'https://www.royalpets.com.br/media/catalog/product/cache/1/image/500x500/9df78eab33525d08d6e5fb8d27136e95/b/r/brinquedo_bud_jumper_pet_go.jpg',
          amount: 119.90,
          description: '-Uma excelente opção para manter seu pet distraído, estimulando os sentidos e garantindo total diversão.'
        },

        {
          id: 10,
          title: 'Bolinha Cravo Flexivel para Cães',
          img: 'https://http2.mlstatic.com/D_NQ_NP_778197-MLB32829215043_112019-O.webp',
          amount: 14.49,
          description: '-Para seu cão ter horas de diversão.'
        },



      ]
    });

    this.get('/beds-and-houses', () => {
      return [
        {
          id: 11,
          title: 'Casinha Chalé Ecológica - Vermelha',
          img: 'https://www.petlove.com.br/images/products/197696/product/Casinha_Chal%C3%A9_Ecol%C3%B3gica_Recriar_Pet_Vermelha_1913171_4.jpg?1556465784',
          amount: 87.90,
          description: '-Elaborada à base de polietileno de Baixa Densidade (PEBD), é durável e resistente, impermeável e pode ser lavada.'
        },

        {
          id: 12,
          title: 'Toca Carinha de Gato Cinza - Tamanho único',
          img: 'https://www.petlove.com.br/images/products/236700/product/2648006_Toca_Carinha_de_Gato_Cinza_1.jpg?1621876897',
          amount: 206.01,
          description: '-Toca para gatos resistente, conforto térmico e acústico, protege o pet da luz.'
        },

        {
          id: 13,
          title: 'Casinha Barcelona para cães e gatos',
          img: 'https://www.petlove.com.br/images/products/231903/product/Casinha_Barcelona_Preto_e_Cinza_para_C%C3%A3es_e_Gatos_2560138.jpg?1604521294',
          amount: 251.82,
          description: '-Casinha de alta durabilidade,lavável na máquina e enchimento removível.'
        },

        {
          id: 14,
          title: 'Cama Soft para Gatos - Cats Fofix ',
          img: 'https://images-na.ssl-images-amazon.com/images/I/61Vfz9Jrh7L._AC_SL1200_.jpg',
          amount: 78.06,
          description: '-Garante conforto, possuindo almofada removível e ótimo acabamento.'
        },

        {
          id: 15,
          title: 'Cama Hello Pet Gato - interativa ',
          img: 'https://www.petlove.com.br/images/products/232401/product/Cama_Hello_Pet_Gato_Interativa_3108174_3.jpg?1605720580',
          amount: 197.91,
          description: '-Cama fácil de limpar, tecido impermeável, ideal para gatos;'
        }
      ]
    });
    
    this.get('/collars', () => {
      return [
        {
          id: 16,
          title: 'Coleira Peitoral Melancia - Emporium Distripet',
          img: 'https://static3.tcdn.com.br/img/img_prod/719253/coleira_peitoral_melancia_emporium_distripet_757_1_20201214002038.jpg',
          amount: 60.90,
          description: '-Confeccionada em tecido super confortável, macia para deixar seu cachorro ou gato bem a vontade durante o passeio.'
        },

        {
          id: 17,
          title: 'Coleira chique para gatos - Para gatos elegantes',
          img: 'https://www.petlove.com.br/images/products/235261/product/Coleira_Chique_para_Gatos_2637557_1.jpg?1619783994',
          amount: 22.52,
          description: '-Super confortável, estampas em alta definição e com fecho anti enforcamento.'
        },

        {
          id: 18,
          title: 'Coleira Fashion com Guizo para gatos',
          img: 'https://www.petlove.com.br/images/products/234414/product/Coleira_Fashion_com_Guizo_para_Gatos_2635599.jpg?1618925025',
          amount: 14.39,
          description: '-Coleira resistente com design único,feita em plástico, metal e tecido.'
        },

        {
          id: 19,
          title: 'Coleira Honey para cães com silenciador de plaquinha',
          img: 'https://www.petlove.com.br/images/products/227257/product/Coleira_Honey_para_C%C3%A3es_2537222.jpg?1597237362',
          amount: 39.61,
          description: '-Coleira com engate em metal soldado,sistema de segurança de 4 pontos e silenciador de plaquinha.'
        },

        {
          id: 20,
          title: 'Peitoral e Guia Toh Outdoor Laguna',
          img: 'https://www.petlove.com.br/images/products/215501/product/Peitoral_e_Guia_Toh_Outdoor_para_C%C3%A3es_Laguna_2425815_3.jpg?1572025751',
          amount: 66.68,
          description: '-Produto de fácil adaptação,segurança e resistência,próprio para suportar fortes puxões.'
        }
      ]
    });

    this.get('/bones-and-snacks', () => {
      return [
        {
          id: 21,
          title: 'Ração Magnus Chips - Para Cães adultos, 15kg',
          img: 'https://www.petlove.com.br/images/products/225089/product/311733.jpg?1593521736',
          amount: 77.93,
          off: 'De R̶$̶8̶0̶,̶2̶2̶',
          description: '- Ração Magnus Chips para Cães Adultos ,é a seleção de ingredientes que proporcionam um alimento com todos os nutrientes essenciais.'

        },

        {
          id: 22,
          title: 'Osso Deliciosso Palito Fino - 450g',
          img: 'https://www.petlove.com.br/images/products/189639/product/Osso-Deliciosso-Palito-Fino-450g---Deliciosso.jpg?1556401456',
          amount: 42.30,
          description: '-Contém Courinho Digerível para Cães,controla o tártaro,limpa os dentes.'
        },


        {
          id: 23,
          title: 'Osso XisDog Bio com Nó Simples para cães',
          img: 'https://www.petlove.com.br/images/products/164770/product/Osso-Xis-Dog-Bio-com-No-Simples-Petsmart.jpg?1556369706',
          amount: 13.50,
          description: '-Delicioso sabor,aperitivo saudável e nutritivo,pode ser dado como demonstração de carinho e atenção'
        },

        {
          id: 24,
          title: 'Biscoito orgânico All Love Maça e Canela ',
          img: 'https://www.petlove.com.br/images/products/198218/product/Biscoito_Org%C3%A2nico_All_Love_Ma%C3%A7a___Canela_para_C%C3%A3es_-_200_g_1925722.jpg?1556466646',
          amount: 32.14,
          description: '-Produto Natural e Orgânico(Certificado),indicado para cães,Sem agrotóxicos e sem transgênicos.'
        },

        {
          id: 25,
          title: 'Biscoito Pedigree Biscrok Para Cães Adultos,1kg',
          img: 'https://images-na.ssl-images-amazon.com/images/I/71RZrm2ZR-L._AC_SL1500_.jpg',
          amount: 32.14,
          description: '-Contém deliciosos biscoitos assados e crocantes com Ômega 6 para pelos mais brilhantes.'
        },

      ]
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


