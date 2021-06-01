import {
  Header,
  Navbar,
  SearchBar,
  CardProductMap,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <Header disableDetailsScreen={true} />
      <Navbar />
      <SearchBar />
      <CardProductMap />
      <Footer />
    </>
  );
}
