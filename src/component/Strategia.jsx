import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Form,
  Modal,
  Row,
  ToggleButton,
} from "react-bootstrap";

import PillNav from "./PillNav/PillNav";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeft,
  ArrowRight,
  CloudArrowUpFill,
  Coin,
  Crosshair,
  GraphUpArrow,
  Heart,
  Journals,
  Percent,
  Trash2Fill,
  X,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { getAllCalciatoriAction } from "../redux/actions/getAllCalciatori";
import "../style/Strategia.css";
import { Link } from "react-router-dom";

const downloadCsv = (data, filename = "giocatori_preferiti.csv") => {
  if (data.length === 0) {
    alert("Nessun dato da esportare.");
    return;
  }
  const headers = [
    "ID",
    "Ruolo",
    "Nome Completo",
    "Squadra",
    "Quotazione",
    "Prezzo Asta Proposto (crediti)",
    "Percentuale Budget (%)",
  ];
  const csvData = data.map((calciatore) => {
    const prezzoAsta = calciatore.prezzoAsta || 0;
    const percentualeBudget = ((prezzoAsta * 100) / 500).toFixed(2);
    return [
      calciatore.id,
      calciatore.ruolo?.toUpperCase(),
      calciatore.nome_completo,
      calciatore.squadra,
      calciatore.valore,
      prezzoAsta,
      percentualeBudget,
    ]
      .map((value) => {
        // Formattazione per CSV: assicura che le virgolette siano gestite correttamente e che i valori siano stringhe
        let stringValue = String(value);
        if (
          stringValue.includes(",") ||
          stringValue.includes('"') ||
          stringValue.includes("\n")
        ) {
          stringValue = `"${stringValue.replace(/"/g, '""')}"`;
        }
        return stringValue;
      })
      .join(",");
  });
  const csvString = [headers.join(","), ...csvData].join("\n");
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.visibility = "hidden";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Strategia = () => {
  const dispatch = useDispatch();
  const handleExportCsv = () => {
    const timestamp = new Date().toISOString().slice(0, 10); // Esempio: 2025-11-24
    downloadCsv(giocatoriMiPiace, `strategia_giocatori_${timestamp}.csv`);
  };
  //DEFINISCO IL FILTRO DA PASSARE AL MOMENTO DEL DISPATCH DEL'ACTION
  const [filters, setFilters] = useState({
    ruolo: "p",
    cognome: "",
    squadra: "",
    valore: "",
    pageNumber: 0,
  });
  useEffect(() => {
    const attesaDigitazione = setTimeout(() => {
      dispatch(getAllCalciatoriAction(filters));
    }, 300);
    return () => clearTimeout(attesaDigitazione);
  }, [filters, dispatch]);
  const lista = useSelector((state) => state.calciatori.calciatori);
  const [radioValue, setRadioValue] = useState("P");
  const radios = [
    { name: "P", value: "p" },
    { name: "D", value: "d" },
    { name: "C", value: "c" },
    { name: "A", value: "a" },
  ];
  const gestioneFiltri = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
      pageNumber: 0,
    });
  };
  const gestioneRuolo = (val) => {
    setRadioValue(val);
    setFilters({
      ...filters,
      ruolo: val,
      pageNumber: 0,
    });
  };
  const cambiaPagina = (direzione) => {
    setFilters((prev) => ({
      ...prev,
      pageNumber:
        direzione === "next" ? prev.pageNumber + 1 : prev.pageNumber - 1,
    }));
  };
  const [prezziTemporanei, setPrezziTemporanei] = useState({});
  const handlePrezzoChange = (id, value) => {
    const prezzo = value === "" ? "" : parseInt(value, 10);
    setPrezziTemporanei((prev) => ({
      ...prev,
      [id]: prezzo,
    }));
  };
  const [percentuali, setPercentuali] = useState({});
  const handlePercentuale = (id, valore) => {
    const percentuale = valore === "" ? "" : parseFloat(valore);
    setPercentuali((prev) => ({ ...prev, [id]: percentuale }));
  };
  console.log(percentuali);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [giocatoriMiPiace, setGiocatoriMiPiace] = useState([]);
  const handleMiPiace = (calciatoreDaGestire) => {
    const calciatoreId = calciatoreDaGestire?.id;
    const isPresente = giocatoriMiPiace.some((g) => g.id === calciatoreId);

    if (isPresente) {
      setGiocatoriMiPiace((prevGiocatoreMiPiace) =>
        prevGiocatoreMiPiace.filter((g) => g.id !== calciatoreId)
      );
    } else {
      const ruolo = calciatoreDaGestire?.ruolo?.toUpperCase();

      if (ruolo === "P") {
        // Controlla il limite solo per i Portieri
        const portieriSelezionati = giocatoriMiPiace.filter(
          (g) => g.ruolo?.toUpperCase() === "P"
        ).length;

        if (portieriSelezionati >= 3) {
          alert(
            "ATTENZIONE: Hai raggiunto il limite massimo di 3 Portieri (P)."
          );
          return;
        }
      } else if (ruolo === "D") {
        const difensoriSelezionati = giocatoriMiPiace.filter(
          (g) => g.ruolo?.toUpperCase() === "D"
        ).length;
        if (difensoriSelezionati >= 8) {
          alert(
            "ATTENZIONE: Hai raggiunto il limite massimo di 8 Difensori (D)."
          );
          return;
        }
      } else if (ruolo === "C") {
        const centrocampistiSelezionati = giocatoriMiPiace.filter(
          (g) => g.ruolo?.toUpperCase() === "C"
        ).length;
        if (centrocampistiSelezionati >= 8) {
          alert(
            "ATTENZIONE: Hai raggiunto il limite massimo di 8 Centrocampisti (C)."
          );
          return;
        }
      } else if (ruolo === "A") {
        const attaccantiSelezionati = giocatoriMiPiace.filter(
          (g) => g.ruolo?.toUpperCase() === "A"
        ).length;
        if (attaccantiSelezionati >= 6) {
          alert(
            "ATTENZIONE: Hai raggiunto il limite massimo di 6 Attaccanti (A)."
          );
          return;
        }
      }
      const prezzoAsta = prezziTemporanei[calciatoreId] || 0;
      setGiocatoriMiPiace((prevGiocatoreMiPiace) => [
        ...prevGiocatoreMiPiace,
        { ...calciatoreDaGestire, prezzoAsta: prezzoAsta },
      ]);
    }
  };
  console.log(lista);
  console.log(giocatoriMiPiace);

  return (
    <>
      <div className=" d-flex justify-content-center">
        <PillNav
          logo={"src/assets/fire.svg"}
          logoAlt="Company Logo"
          items={[
            { label: "ASTA", href: "/impostazioni-asta" },
            { label: "STRATEGIA", href: "/strategia" },
            { label: "CAMPETTO", href: "/campetto" },
            { label: "PROFILO", href: "/profile" },
          ]}
          activeHref="/"
          className="custom-nav"
          ease="power2.easeOut"
          baseColor="#dda60eff"
          pillColor="#212529"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#fcf9f9ff"
        />
      </div>
      <div className=" d-flex">
        <Button
          variant="outline-light mt-2"
          className=" rounded-pill"
          onClick={handleShow2}
        >
          <ArrowLeft className=" fs-3" />
        </Button>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Torna in Homepage</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Sei sicuro di voler uscire dalla pagina Strategia?
          </Modal.Body>
          <Modal.Footer>
            <Link
              to={"/"}
              className=" text-light btn btn-warning"
              onClick={handleClose2}
            >
              Si
            </Link>
            <Button variant="danger" onClick={handleClose2}>
              No
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Container fluid>
        {" "}
        <Row className=" mt-5">
          <Col className=" d-flex mb-2">
            <Button
              variant="warning"
              className=" text-light fw-bold rounded-pill me-2"
            >
              Crea Strategia <span>+</span>
            </Button>
            <Form.Control
              type="text"
              placeholder="Cerca Giocatore"
              className=" w-50"
              name="cognome"
              onChange={gestioneFiltri}
              value={filters.cognome}
            ></Form.Control>
            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  className=" rounded-pill mx-1"
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={
                    idx === 0
                      ? "outline-warning"
                      : idx === 1
                      ? "outline-success"
                      : idx === 2
                      ? "outline-primary"
                      : idx === 3
                      ? "outline-danger"
                      : ""
                  }
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => gestioneRuolo(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>
            <Button
              variant="outline-light"
              className=" rounded-pill ms-2"
              onClick={handleExportCsv}
            >
              <CloudArrowUpFill className=" me-2" />
              Esporta Strategia
            </Button>
            <Button
              variant="outline-danger"
              className=" ms-2 rounded-pill"
              onClick={() => {
                setGiocatoriMiPiace([]);
              }}
            >
              <Trash2Fill className=" me-1" />
              Elimina
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            {lista.map((calciatore) => {
              const selezionato = giocatoriMiPiace.some(
                (g) => g.id === calciatore?.id
              );
              return (
                <Row key={calciatore?.id} className=" mt-2">
                  <Col className=" d-flex text-light align-items-center  ">
                    <Heart
                      style={{ cursor: "pointer" }}
                      className={`fs-3 me-3 ${
                        selezionato ? "text-danger" : " "
                      } `}
                      onClick={() => {
                        handleMiPiace(calciatore);
                      }}
                    />

                    <img
                      src={calciatore?.campioncino}
                      alt=""
                      className="imgsize me-3"
                    />

                    <div className=" w-25">
                      <h5 className=" m-0">{calciatore?.nome_completo}</h5>
                      <p className=" m-0">{calciatore?.squadra}</p>
                    </div>
                    <div className=" d-flex justify-content-center flex-column align-items-center">
                      <div className=" d-flex align-items-center  ">
                        <Coin className=" me-1 text-warning" />
                        <small className=" m-0">Prezzo</small>
                      </div>
                      <Form.Control
                        type="number"
                        className=" trasparente w-50 text-warning text-center"
                        value={
                          prezziTemporanei[calciatore?.id]
                            ? prezziTemporanei[calciatore?.id]
                            : (percentuali * 500) / 100 || ""
                        }
                        onChange={(e) =>
                          handlePrezzoChange(calciatore?.id, e.target.value)
                        }
                        disabled={selezionato}
                      ></Form.Control>
                    </div>
                    <div className=" d-flex justify-content-center flex-column align-items-center">
                      <div className=" d-flex align-items-center  ">
                        <Percent className=" me-1 text-warning" />
                        <small>Budget</small>
                      </div>
                      <Form.Control
                        type="number"
                        className=" trasparente w-50 text-warning"
                        onChange={(e) => {
                          handlePercentuale(calciatore?.id, e.target.value);
                        }}
                        value={
                          prezziTemporanei[calciatore?.id]
                            ? (prezziTemporanei[calciatore?.id] * 100) / 500
                            : percentuali || ""
                        }
                      ></Form.Control>
                    </div>
                    <div className=" d-flex justify-content-center flex-column align-items-center">
                      <div className=" d-flex align-items-center  ">
                        <Journals className=" me-1 text-warning" />
                        <small>Appunti</small>
                      </div>
                      <Form.Control className=" trasparente w-50 text-warning text-center"></Form.Control>
                    </div>
                    <div className=" d-flex justify-content-center flex-column align-items-center">
                      <div className=" d-flex align-items-center  ">
                        <Journals className=" me-1 text-warning" />
                        <small>Appunti</small>
                      </div>
                      <Form.Control className=" trasparente w-50 text-warning text-center"></Form.Control>
                    </div>
                    <div className=" d-flex justify-content-center flex-column align-items-center">
                      <div className=" d-flex align-items-center  ">
                        <GraphUpArrow className=" me-1 text-warning" />
                        <small>Quotazione</small>
                      </div>
                      <Form.Control
                        className=" trasparente w-50 text-warning text-center"
                        readOnly
                        value={calciatore?.valore}
                      ></Form.Control>
                    </div>
                  </Col>
                </Row>
              );
            })}
          </Col>
          <Col xs={12} md={4} className=" text-light">
            <h2 className=" text-center">Strategia</h2>
            {giocatoriMiPiace.map((calciatore) => {
              return (
                <>
                  <div
                    className={` rounded-pill text-center d-flex mb-1 justify-content-around align-items-center ${
                      calciatore?.ruolo === "P"
                        ? "bg-warning"
                        : calciatore?.ruolo === "D"
                        ? "bg-success"
                        : calciatore?.ruolo === "C"
                        ? "bg-primary"
                        : calciatore?.ruolo === "A"
                        ? "bg-danger"
                        : ""
                    }`}
                  >
                    <img
                      src={calciatore.campioncino}
                      alt=""
                      style={{ width: "40px" }}
                      className=" ms-1"
                    />

                    <div className="">
                      <small>Ruolo</small>
                      <p className=" fw-bold ">{calciatore?.ruolo}</p>
                    </div>
                    <div key={calciatore?.id}>
                      <small>Nome</small>
                      <p className=" fw-bold ">{calciatore.cognome}</p>
                    </div>
                    <div>
                      <small>Prezzo</small>
                      <p className=" fw-bold">{calciatore.prezzoAsta}</p>
                    </div>
                    <div>
                      <small>Budget %</small>
                      <p className=" fw-bold">
                        {(calciatore.prezzoAsta * 100) / 500}
                      </p>
                    </div>
                    <X
                      style={{ cursor: "pointer" }}
                      className=" fs-3 text-danger end"
                      onClick={() => {
                        handleMiPiace(calciatore);
                      }}
                    />
                  </div>
                </>
              );
            })}
          </Col>
          {lista?.pageNumber !== 0 && (
            <ArrowLeft
              style={{ cursor: "pointer" }}
              className=" text-light fs-3"
              onClick={() => cambiaPagina("prev")}
            />
          )}
          <ArrowRight
            style={{ cursor: "pointer" }}
            className=" text-light fs-3"
            onClick={() => cambiaPagina("next")}
          />
        </Row>
      </Container>
    </>
  );
};
export default Strategia;
