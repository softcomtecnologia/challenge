import styled from "styled-components";

export const Container = styled.div`
    margin-top: 5px;
    background-color: var(--color-gray);
    padding-bottom: 10px;

    > .sectionName{
       margin-left: 25px;
       font-size: 22px;     
    }
`;

export const ProductsList = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

`;