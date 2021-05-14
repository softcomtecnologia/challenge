import { Container, Wrapper } from "../styles/App";
import GlobalStyles from "../styles/GlobalStyles";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container>
 
        <Wrapper>
          
            <h1>_App</h1>

        </Wrapper>

      </Container>

      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}

export default MyApp;