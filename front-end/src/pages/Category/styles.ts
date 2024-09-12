import styled from 'styled-components';
import { darken } from 'polished'

export const ProductList = styled.ul`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: nome;
    padding:10px;
    
    li{
        display:flex;
        flex-direction:column;
        background:#fff;
        border-radius:10px;
        padding:20px;
        margin-bottom:20px;
        img{
            align-self: center;
            max-width: 250px;
        }
        > strong{
            font-size:16px:
            line-height:20px;
            color: #333;
            margin-top: 5px;
        }
        > span{
            font-size:21px;
            font-weight:bold;
            margin:5px 0 20px;
        }
        button{
            background:#7159c1;
            color:#fff;
            border:0;
            border-radius:4px;
            overflow: hidden;
            margin-top:auto;
            
            display:flex;
            align-items:center;
            transition:background 0.2s;
            
            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }
            div{
                display:flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);
                
                svg{
                    margin-right: 5px;
                }
            }
            span{
                flex: 1;
                text-align: center;
                font-weight: bold;
            }

        }
    }
`;
export const CategoryList = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    h2{
        padding: 10px 5px;
        text-decoration: none;
        white-space: nowrap;
        font-size: 1.6rem;
        color:#fff

    }
    @media(max-width: 800px) {
        flex-direction: column;
        position: relative;
      }
    ul{
        display: flex;
        justify-content: center;
        background:#fff;
        border-radius:4px;
        list-style: none;
        padding:5px;
        @media(max-width: 800px) {
            flex-direction: column;
            position: relative;
          }
            li{
                padding: 10px 5px;
                cursor: pointer;
                text-decoration: none;
                transition: all .3s ease;
                text-transform: capitalize;
                white-space: nowrap;
                margin-right: 6px;
                font-size: 1.4rem;
                &:hover{
                    transform: scale(1.1);
                    text-decoration: underline;
        }
    }
  }


`;