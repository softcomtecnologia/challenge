import Footer from "../components/Footer";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/globals";

export default function Home() {
  return (
    <GlobalStyle>
      <Header disableDetailsScreen={true} />
      Hello Challenge Softcom
      {/* <Footer /> */}
    </GlobalStyle>
  );
}
