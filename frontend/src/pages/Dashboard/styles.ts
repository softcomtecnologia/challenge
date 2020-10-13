import styled from 'styled-components';

export const Container = styled.div``;

export const Head = styled.div`
  background-color: var(--black-medium);
  padding: 16px 11rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div#header {
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    width: 150px;
  }

  div#welcome {
    display: flex;
    flex-direction: column;

    span {
    font-size: 12px;
    color: var(--gray);
    width: 130px;

    &:not(:first-child) {
      width: 100%;
      font-size: 14px;
      color: var(--orange);
    }
  }
  }

  div#logout {
    background-color: var(--background);
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--shape);
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: 70%;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  div#title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div#items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    grid-column-gap: 3.3rem;
  }
`; 

export const Item = styled.div`
  width: 250px;
  margin-top: 32px;
  background: var(--black-medium);
  border-radius: 0 0 15px 15px;

  display: flex;
  flex-direction: column;

  div#title-item {
    padding: 7px 20px;
    background: var(--shape);
    border-radius: 3px 3px 0 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    

    div#options {
      width: 40px;
      display: flex;
      justify-content: space-between;
    }
  }

  div#body-item {
    padding: 20px 20px;
    color: var(--gray);
    min-height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    p#description {
      font-size: 13px;
    }

    p#price {
      padding-top: 10px;
      display: flex;
      justify-content: flex-end;
      font-size: 15px;
    }
  }
`;
