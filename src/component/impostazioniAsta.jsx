import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyNavbar from "./myNavbar";
import { useState } from "react";

const ImpostazioniAsta = () => {
  const [nAllenatori, setNAllenatori] = useState(0);
  const [nCrediti, setNCrediti] = useState(0);
  console.log(nAllenatori);
  console.log(nCrediti);

  return (
    <>
      <MyNavbar />
      <Container className=" p-5 m-5">
        <Row>
          <h1 className=" text-center fw-bolder text-black">
            CREA LA TUA ASTA
          </h1>
          <Col xs={12} md={4}>
            <h2 className=" text-center">Quanti Fanta Allenatori?</h2>
            <Form.Select
              onChange={(e) => {
                setNAllenatori(e.target.value);
              }}
            >
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={4}>
            <h2 className=" text-center">Quanti Fanta Milioni?</h2>
            <Form.Select
              onChange={(e) => {
                setNCrediti(e.target.value);
              }}
            >
              <option value="250">250</option>
              <option value="300">300</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </Form.Select>
          </Col>
          <Col xs={12} md={4}>
            <h2 className=" text-center">Giocatori per Ruolo</h2>
          </Col>
          <Link to={"/asta"}>
            <Button
              variant="outline-success"
              className=" border-3 mt-5 w-100" /*onClick={()=>{chiamata post su tabella aste con stato di crediti e allenatori}}*/
            >
              Crea Asta
            </Button>
          </Link>
        </Row>
      </Container>
    </>
  );
};
export default ImpostazioniAsta;
