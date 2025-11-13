import { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { ArrowBarDown, ArrowBarUp, Coin } from "react-bootstrap-icons";
import "../style/playerColumn.css";
const PlayerColumn = ({ nomeUtente, crediti }) => {
  // Stato iniziale per i ruoli
  const [countP, setCountP] = useState(3);
  const [countD, setCountD] = useState(8);
  const [countC, setCountC] = useState(8);
  const [countA, setCountA] = useState(6);

  // Configurazione ruoli
  const roles = [
    {
      role: "P",
      count: countP,
      colorClass: "bg-warning text-light justify-content-start",
    },
    {
      role: "D",
      count: countD,
      colorClass: "bg-success text-light  justify-content-start",
    },
    {
      role: "C",
      count: countC,
      colorClass: "bg-info text-light  justify-content-start",
    },
    {
      role: "A",
      count: countA,
      colorClass: "bg-danger text-light  justify-content-start",
    },
  ];

  // Stato per lo stile delle freccie per dimnuire o aumentare le caselle
  const [sizeArrow1, setSizeArrow1] = useState("fs-3");
  const [sizeArrow2, setSizeArrow2] = useState("");

  return (
    <>
      {/* Questa parte rappresenta il nome dell'utente e i crediti residui */}
      <Col className="mx-3 my-5 p-0" xs={12} md={1}>
        <div className="sticky-top bordi mb-1">
          <Row className=" text-center">
            <p className=" text-white fs-5 m-0">{nomeUtente}</p>
          </Row>
          <Row className=" justify-content-center fs-3 ">
            <div className=" d-flex justify-content-center align-items-center mb-2">
              {" "}
              <Coin className="text-warning me-2" />
              <p className=" m-0 fw-bold text-white">{crediti}</p>
            </div>
          </Row>
        </div>
        {/* Questa parte sotto va ripetuta per quanti sono i ruoli 3P, 8D, 8C, 6A */}
        {roles.map(({ role, count, colorClass }) =>
          Array.from({ length: count }, (_, index) => (
            <div key={index}>
              {index === 0 && (
                <div key={index} className=" text-center">
                  <div>
                    <div className={`rounded-3 p-0 m-0 ${colorClass} d-flex `}>
                      <span className=" text-white ms-1">{role}</span>
                      <p className=" m-0 mx-auto">0%</p>
                    </div>
                  </div>
                  <ArrowBarUp
                    onClick={() => {
                      if (role === "P") setCountP(1);
                      if (role === "D") setCountD(1);
                      if (role === "C") setCountC(1);
                      if (role === "A") setCountA(1);
                      setSizeArrow1("");
                      setSizeArrow2("fs-3");
                    }}
                    className={` pointer ${sizeArrow1} my-1 text-white`}
                  >
                    riduci
                  </ArrowBarUp>
                  <ArrowBarDown
                    onClick={() => {
                      if (role === "P") setCountP(3);
                      if (role === "D") setCountD(8);
                      if (role === "C") setCountC(8);
                      if (role === "A") setCountA(6);
                      setSizeArrow1("fs-3");
                      setSizeArrow2("");
                    }}
                    className={` pointer ${sizeArrow2} my-1 text-white`}
                  >
                    estendi
                  </ArrowBarDown>
                </div>
              )}
              <Row className=" d-flex trasparente p-2 ">
                <Form.Control className=" bg-transparent border-0 shadow-none text-light" />
                <InputGroup className="mb-3 p-0">
                  <InputGroup.Text className=" ">FM</InputGroup.Text>
                  <Form.Control className=" shadow-none border-0" />
                </InputGroup>
              </Row>
            </div>
          ))
        )}
      </Col>
    </>
  );
};
export default PlayerColumn;
