import Header from "../components/Header";
import Navbar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <>
      <Header disableDetailsScreen={true} />
      <Navbar />
      <SearchBar />
    </>
  );
}
