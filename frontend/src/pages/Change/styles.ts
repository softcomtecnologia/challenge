import styled from 'styled-components';

export const Container = styled.div``;

export const Head = styled.div`
  background-color: var(--black-medium);
  padding: 16px 11rem;
  display: flex;
  align-items: center;
  justify-content: center;

  div#compact {
    width: 800px;
    max-width: 800px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div#return {
    background-color: var(--background);
    padding: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--shape);
  }

  div#logo {
    img {
      width: 150px;
    }
  }
`;

export const Content = styled.div`
  width: 400px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  h2 {
    padding-bottom: 20px;
  }
`; 