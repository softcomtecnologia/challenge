import {
  Header,
  Navbar,
  SearchBar,
  CardProductMap,
  Footer,
} from "../../components";

export default function Home() {
  return (
    <>
      <Header desableDetailsScreen={true} />
      <Navbar />
      <SearchBar />
      <CardProductMap />
      <Footer />
    </>
  );
}
