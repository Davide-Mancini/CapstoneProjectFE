import { Container } from "react-bootstrap";
import Griglia from "./griglia";
import ImpostazioniAsta from "./impostazioniAsta";
import MyNavbar from "./myNavbar";
import Searchbar from "./searchbar";

const Asta = () => {
  return (
    <>
      <MyNavbar />
      <Searchbar />
      <Griglia />
    </>
  );
};
export default Asta;
