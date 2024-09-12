import styled from 'styled-components';
import { Link} from 'react-router-dom'


export const CategoryList = styled.nav`
    display: flex;
    justify-content: center;
    width: 100%;
    h2{
        padding: 10px 5px;
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
          Link {
            padding: 10px 5px;
                cursor: pointer;
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
            li{
                padding: 10px 5px;
                cursor: pointer;
                transition: all .3s ease;
                text-transform: capitalize;
                white-space: nowrap;
                margin-right: 6px;
              }   
        }       
`;
export const Cat = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration:none;
    transition:opacity 0.2s;
    Color:Black;
    font-size: 1.4rem;
    &:hover{
        opacity:0.5
    }
 
`;