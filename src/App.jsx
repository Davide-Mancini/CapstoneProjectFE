import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomePage from "./component/homePage";
import MyNavbar from "./component/myNavbar";

import ImpostazioniAsta from "./component/impostazioniAsta";
import Asta from "./component/Asta";
import Strategia from "./component/Strategia";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/impostazioni-asta"
              element={<ImpostazioniAsta />}
            ></Route>
            <Route path="/asta" element={<Asta />} />
            <Route path="/strategia" element={<Strategia />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
