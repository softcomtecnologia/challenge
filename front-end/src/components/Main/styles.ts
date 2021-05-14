import styled from "styled-components";
import { HiOutlineSearch } from 'react-icons/hi';

export const Container = styled.div`
    /* margin-top: 5px; */
`;

export const SellerContainer = styled.div`
    background-color: var(--color-gray);
    border-top: 1px solid var(--color-gray100);
    height: 100px;
`;

export const SearchWrapper = styled.div`
    padding: 30px 24px;
    width: min(690px, 100%);
    max-height: 55px;
    margin-bottom: 30px;
`;

export const SearchInput = styled.input`
    width: min(660px, 100%);;
    height: 39px;
    font-size: 14px;
    border-radius: 5px;
    background-color: var(--color-white);
    position: relative;

    border: 1px solid var(--color-gray150);

    &::placeholder{
        color: var(--color-gray200);
        padding-left: 10px;
    }

    ~ svg{
        position: relative;
        top: -30px;
        left: min(610px, 100%);
        z-index: 10;
    }

    transition: 180ms ease-in-out;

`;

export const SearchIcon = styled(HiOutlineSearch)`
    width: 21px;
    height: 21px;
    color: var(--color-gray200);
`;
