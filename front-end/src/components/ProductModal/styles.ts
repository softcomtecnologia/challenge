import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: rgba(180, 28, 139, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  > .modal {
    background-color: #fff;
    width: 60%;
    height: 470px;
    color: black;
    border-radius: 15px;

    > .close {
      background-color: transparent;
      outline: none;
      width: 32px;
      height: 32px;
      margin-left: calc(100% - 50px);
      cursor: pointer;
      border: none;
      z-index: 1000;

      &:before,
      &:after {
        content: " ";
        position: absolute;
        width: 2.5px;
        height: 24px;
        background-color: black;
      }
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
    }
  }
`;

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 65fr 35fr;
`;

export const ImageContainer = styled.div`
  height: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  > img {
    height: 70%;
  }

  > span {
    top: 10px;
    left: 45px;
    width: 10rem;
    position: absolute;
    text-align: center;
    background-color: var(--color-green);
    padding: 4px;
    font-size: 22px;
    border-radius: 4px;
    color: var(--color-white);
  }
`;

export const CardTitle = styled.div`
  font-size: 20px;
  text-align: left;
  height: 3rem;
  font-weight: 700;
`;

export const CardPrice = styled.div`
  margin-top: 25px;
  font-size: 30px;
  font-weight: 700;
  height: 4rem;
`;

export const CardAddCart = styled.div`
  cursor: pointer;
  border: 1px solid var(--color-gray100);
  border-radius: 10px;
  margin: 30px 20px;
  margin-left: -40px;
  padding: 38px 20px;

  > .qtdProduct {
    width: 100%;
    margin-top: 1px;
    display: flex;
    align-items: center;
    > span {
      margin-left: 25px;
      font-size: 17px;
    }
    > button {
      background-color: var(--color-background);
      color: var(--color-white);
      width: 2.2rem;
      height: 2.2rem;
      border-radius: 4px;
      margin: 1px;
      cursor: pointer;
      font-size: 25px;
    }
  }

  > .buttonAddCart {
    width: 100%;

    > button {
      background-color: var(--color-background);
      color: var(--color-white);
      height: 2.5rem;
      border-radius: 4px;
      margin-top: 3rem;
      width: 100%;
      font-size: 15px;
      cursor: pointer;
    }
  }
`;
