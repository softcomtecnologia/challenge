    import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--color-white);
    width: 250px;
    height: 440px;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    border: 1px solid var(--color-border);
    border-radius: 5px;
    margin: 10px 10px;

    transition: 0.3s;
    animation: ease-in-out;

    &:hover{
        box-shadow: 0px 0px 5px 0px;
    }
`;

export const ImageContainer = styled.div`
    width: 224px;
    height: 224px;

    > span{
        width: 4.5rem;
        position: absolute;
        text-align: center;
        margin-top: 10px;
        background-color: var(--color-green);
        padding: 4px;
        font-size: 14px;
        border-radius: 4px;
        color: var(--color-white);
    }

`;

export const CardTitle = styled.div`
    height: 4rem;
    text-align: left;
    font-size: 19px;
    font-weight: 500;
    margin: 5px 10px
`;

export const CardPrice = styled.div`
    width: 100%;
    padding: 0.5rem;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content:center;
`;

export const CardAddCart = styled.div`
    cursor: pointer;

    > div{
        width: 100%;
        >span{
            width: 2rem;
            height: 2rem;
            margin-left: 10px;
        }
        > button{
            background-color: var(--color-background);
            color: var(--color-white);
            width: 2rem;
            height: 2rem;
            border-radius: 4px;
            margin: 1px;
            cursor: pointer;
        }
    }
    .addToCart{
        background-color: var(--color-background);
        color: var(--color-white);
        height: 2rem;
        border-radius: 4px;
        margin-top: 1rem;
        padding: 8px 8px;
        cursor: pointer;
    }
`;