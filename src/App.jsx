import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import HomePage from "./component/homePage";
import MyNavbar from "./component/myNavbar";

import ImpostazioniAsta from "./component/impostazioniAsta";
import Asta from "./component/asta";
import Strategia from "./component/Strategia";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./redux/actions/checkAuth";
import { Profile } from "./component/profile";
import { ListaGiocatori } from "./component/listaGiocatori";
import "./component/FuzzyText/FuzzyText/FuzzyText";
import NotFoundPage from "./component/notFoundPage";
import Campetto from "./component/Campetto";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Container fluid className=" bg-dark">
          <Routes>
            <Route path="/listacalciatori" element={<ListaGiocatori />} />
            <Route path="/" element={<HomePage />} />
            <Route
              path="/impostazioni-asta"
              element={<ImpostazioniAsta />}
            ></Route>
            <Route path="/campetto" element={<Campetto />}></Route>
            <Route path="/sessioniAsta/:id" element={<Asta />} />
            <Route path="/strategia" element={<Strategia />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
