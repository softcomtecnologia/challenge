import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
*{
  margin:0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

}  
body {
  background:#B41C8B;    
}
body, input, button{
  font: 14px Roboto, sans-serif;
  font-color:#fff
}
#root{
  max-width:1020px
  margin: 0 auto;
  padding:0 20px 50px;
}
button{
  cursor:pointer;
}
`;
 
export default GlobalStyle;