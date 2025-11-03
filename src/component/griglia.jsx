import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import Asta from "./Asta";
import PlayerColumn from "./playerColumn";

const Griglia = () => {
  // Definisco gli utenti (giocatori)
  const utentiGiocatori = [
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
    {
      name: "{utente.nome (dal DB)}",
      crediti: 500, //sempre da recuperare dal DB
      // setCrediti: setCreditiResiduiKenbukan,
    },
  ];

  return (
    <>
      <Container className=" overflow-x-auto flex-nowrap" fluid>
        <Row className=" flex-nowrap">
          {utentiGiocatori.map((singoloUtente, index) => (
            <PlayerColumn key={index} nomeUtente={singoloUtente.name} />
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Griglia;
