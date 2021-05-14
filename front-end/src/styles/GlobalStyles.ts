import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-background);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-weight: 500;
    font-family: 'Quicksand',Arial,sans-serif;
  }
  :root {
    --color-background: #B41C8B;
    --color-primary: #F5F5F5;
    --color-black: #333333;
    --color-black200: #3F3F3F;
    --color-white: #FFF;
    --color-gray: #F3F3F4;
    --color-gray100: #E0E0E0;
    --color-gray150: #DDDDDD;
    --color-gray200: #ACACAC;
    --color-dark-gray: #808080;
    --color-blue: #3483fa;
    --color-dark-green: #1BBB16;
    --color-green: #77D400;

    --color-search-placeholder: #AAAAAA;
    --color-border: #D9D9D9;

    --panel-shadow: 0 1px 3px 0 rgba(0,0,0,.3);
  }
`;


