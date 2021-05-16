import styled from'styled-components'
import { Link} from 'react-router-dom'
export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0;
    font-color:#fff;
    img {
        max-width:250px;
        max-height:200px;
        width: auto;
        height: auto;
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration:none;
    color:#fff;
    transition:opacity 0.2s;

    &:hover{
        opacity:0.7
    }
    div{
        text-align: right;
        margin-right: 10px;
        strong{
            display:block;
            font-size: 25px;    
            color:#fff
        }

    }
    span{
        font-size: 25px;
        color:#999;
    }
`;