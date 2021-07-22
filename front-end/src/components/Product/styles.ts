import styled, {keyframes} from "styled-components";

const appearFromLeft = keyframes`
    from{
    opacity: 0;
    transform: translateX(-50px);
  }to{
    opacity: 1;
    transform: translateX(0);
  }
`;


export const Container = styled.div`
 
    background: #F3F3F4;
    width: 100%;
`;

export const Separator = styled.div`
    width: 50%;
    padding-top: 1rem;
    padding-left: 5rem;
    //background: red;
    position: absolute;


    svg{
        position: absolute;
        padding: 0.2rem;
        height: 1rem;
        margin-left: 31.6rem;
        margin-top: 0.7rem;

        @media(max-width: 600px){
            display: none;
        }
        @media(max-width: 1300px){
            display: none;
        }
    }
    input{
        float: left;
        width: 93%;
        padding: 10px;
        border: none;
        outline: none;
        border: 1px solid #DDDDDD;
        box-sizing: border-box;
        border-radius: 5px 0 0 5px;

        @media(max-width: 765px){
            width: 100%;
        }

        @media(max-width: 600px){
              width: 200%;

        }
    
    
    }
    animation: ${appearFromLeft} 1s;
`; 



export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0 4.6rem;
    //background: #000;

    h1 {
        margin-top: 5rem;
        margin-bottom: 0;
        margin-right: 0;
        margin-left: 0.4rem;
        padding-right: 6rem;
        padding-bottom: 0;
        height: 3rem;
        width: 100%;
        @media(max-width: 600px){
            margin-bottom: 2rem;
        }

    }


    button {
        flex: 1 1 200px;
        margin: 8px;
        max-width: 20%;
        max-height: 20%;
        background: var(--titles);
        //background: #000;
        border: 1px solid #D9D9D9;
        box-sizing: border-box;
        border-radius: 5px;
        cursor: auto;
        @media(max-width: 1300px){
            max-width: 30%;
        }
        @media(max-width: 600px){
            max-width: 50%;
        }
        

        img {
            max-width: 100%;
            display: block;
            max-width: 100%;
            max-height: 100%;
            height: 18.75rem;
            width: 18.75rem;
        }
    }

    strong {
        margin: 1rem;
        
    }

    span {
        display: block;
        margin-bottom: 1rem;
        color: #DC143C;
        font-weight: 600;

    }

    p {
        font-weight: bold;
        font-size: 1rem;
        line-height: 27px;
        color: #3F3F3F;
        
        button {
            cursor: pointer;
            background: var(--background);
            border: 0;
            border-radius: 0.25rem;
            color: #FFF;
            width: 100%;
            //margin: auto 2rem;
            margin-left: 1rem;

            margin-right: -3rem;
            padding-right: 4.5rem;
            padding-left: 0.5rem;

            height: 2rem;
            font-size: 0.9rem;
            font-weight: 600;

            @media(max-width: 765px){
                margin: auto;
                padding-left: 0;
                padding-right: 0;
                margin-left: 1rem;
                font-size: 0.7rem;
            }

            @media(max-width: 600px){
                margin: auto;
                padding-left: 0;
                padding-right: 0;
                margin-left: 1rem;
                font-size: 0.9rem;

            }
            
            
        }
    }

    animation: ${appearFromLeft} 1s;
  
`;

//ESTILIZAÇÃO MODAL

export const ContainerModal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .button-close{
        margin-left: 33rem;
        border: none;
        background: none;
        color: var(--gridTextTitle);
    }

    img{
        border: 1px solid #EAEAEA;
        box-sizing: border-box;
        border-radius: 5px;
        
    }
    h1 {
        color: var(--background);
        font-size: 1.5rem;
        padding-left: 0.7rem;
        margin-bottom: 0.7rem;
        margin-top: 0.7rem;
        justify-content: center;
        align-items: center;
        margin-right: 5rem;
        margin-left: 5rem;
    }

    p {
        font-weight: 400;

        @media(max-width: 520px){
            width: 50%;
        }
    }

    .div-plus-and-less {
        margin: 1rem 14.9rem;
        padding: 0.2rem 2rem;
        //width: 3.1rem;
        width: 3.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #d7d7d7;
        box-sizing: border-box;
        border-radius: 5px;

        button {
            margin: auto;
            padding: 0;
            border: none;
            background: none;

            svg{
                color: #B41C8B;
            }
            
        }

        span {
                margin: auto 0.7rem;
                padding: auto 2rem;
                font-weight: 600;
            }
        
        @media(max-width: 1090px){
            margin: 0.2rem;
        }
        @media(max-width: 900px){
            margin: 0.1rem;
        }

        @media(max-width: 600px){
            margin: 0.1rem;
            
        }

        @media(max-width: 520px){
            width: 30%;
        }
    }

    .button-add-product {
        background: var(--background);
        border-radius: 0.25rem;
        border: 0;
        color: #FFF;
        width: 100%;
        padding: 0 1.5rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: 600;

        @media(max-width: 900px){
            margin: 3rem;
        }

        @media(max-width: 898px){
            margin: 1rem;
        }

        @media(max-width: 520px){
            width: 80%;
        }
    }


`;

