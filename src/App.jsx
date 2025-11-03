import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomePage from "./component/homePage";
import MyNavbar from "./component/myNavbar";
import Asta from "./component/asta";
import ImpostazioniAsta from "./component/impostazioniAsta";

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
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
