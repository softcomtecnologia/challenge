import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--color-white);
    margin-top: 5px;
`;

export const CategoryNav = styled.ul`
    list-style: none;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 7px;
    justify-content: center;
    text-align: center;
    
    padding: 25px 20px;

    > li{
        > a{
        text-decoration: none;
        font-weight: 500;
        color: var(--color-black200);

            &.active{
                color: var(--color-background);
                font-weight: 700;
                text-decoration: underline var(--color-background);
            }
            &:hover{
                color: var(--color-background);
                font-weight: 700;
            }
        }
    }
`;
