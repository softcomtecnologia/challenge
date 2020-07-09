import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
  :root { 
    --orange: #FF9000;
    --white: #F4EDE8;
    --gray: #999591;
    --gray-hard: #666360;
    --shape: #3E3B47;
    --black-medium: #28262E;
    --background: #312E38;
    --inputs: #232129;
    --error: #c56060;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--background);
    color: var(--white);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px 'Roboto Slab', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;