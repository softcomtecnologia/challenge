import styled, {keyframes} from "styled-components";

const appearFromRight = keyframes`
    from{
    opacity: 0;
    transform: translateX(50px);
  }to{
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
    margin: 1.2rem auto;
   

    img {
        width: 100%;
        margin: 1rem auto;

        @media(max-width: 765px){
            width: 105%;
        }

        @media(max-width: 693px){
            width: 113%;
        }
    }

    button {
        font-size: 1rem;
        font-weight: 500;
        margin: auto 1rem 0 4rem;
        padding: 0 2rem;
        border: none;
        background: none;
        align-items: center;
        justify-content: center;

        transition: filter 0.3s;

        &:hover {
            color: var(--background);
            text-decoration: underline;
        }

        @media(max-width: 1000px){
            width: 5%;
        }

        @media(max-width: 845px){
            width: 10%;
        }

        @media(max-width: 765px){
            width: 8%;
        }

        @media(max-width: 630px){
            padding: 1rem 1rem;
        }
    }

    animation: ${appearFromRight} 1s;

`;