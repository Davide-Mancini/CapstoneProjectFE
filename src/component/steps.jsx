import { Col, Container, Row } from "react-bootstrap";
import { Coin, Lightbulb, Sliders } from "react-bootstrap-icons";

const Steps = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4} className=" text-center border-end">
            <Lightbulb className=" fs-1 my-3" />
            <h3>Crea la tua strategia!</h3>
            <p>
              Crea la tua strategia d'asta, nella sezione "STRATEGIE", definisci
              il budget per ogni reparto.
            </p>
          </Col>
          <Col xs={12} md={4} className=" text-center border-end">
            <Sliders className=" fs-1 my-3" />
            <h3>Imposta l'asta</h3>
            <p>
              Definisci le regole dell'asta: quanti fanta allenatori, quanti
              fanta milioni, modificatore difesa.
            </p>
          </Col>
          <Col xs={12} md={4} className=" text-center">
            <Coin className=" fs-1 my-3" />
            <h3>Inizia a rilanciare</h3>
            <p>
              Non ti resta che invita gli altri fanta allenatori e iniziare a
              chiamare il tuo pupillo... sperando di non sforare il budget
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Steps;
