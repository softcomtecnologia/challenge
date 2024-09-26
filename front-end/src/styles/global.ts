import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --background: #B41C8B;
        --titles: #FFFFFF;
        --titleStore: #333333;
        --gridTextTitle: #3F3F3F;
        --green: #1BBB16;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        /* background: var(--background); */
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

//estilizando o modal
.react-modal-overlay {
        background: rgba(0, 0, 0, 0.5);
        
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: var(--titles);
      padding: 1rem;
      position: relative;
      border-radius: 0.25rem;

      @media(max-width: 900px){
          height: 98%;
          max-height: 644px;
          padding: 0.5rem;
      }

      @media (max-width: 898px){
          max-height: 620px;
      }

      @media (max-width: 600px){
          max-width: 500px;
      }

      @media (max-width: 430px){
          max-height: 640px;
      }
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }

`;