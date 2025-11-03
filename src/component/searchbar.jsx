import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../style/searchbar.css";

const Searchbar = () => {
  return (
    <>
      <Container fluid className=" mt-4">
        <Row>
          <Col xs={12} md={8}>
            <Form className="d-flex margine">
              <Form.Control
                type="search"
                placeholder="Cerca giocatore"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark" className=" border-3">
                Cerca
              </Button>
            </Form>
            <Row className=" mt-2 text-center">
              <h1>calciatore.nome</h1>
            </Row>
            <Row className=" d-flex justify-content-evenly mt-3 ">
              <Button className=" border-0 w-25 fs-5 bg-info">+1</Button>
              <Button className=" border-0 w-25 fs-5 bg-success">+5</Button>
              <Button className=" border-0 w-25 fs-5 bg-warning">+10</Button>
            </Row>
          </Col>
          <Col xs={12} md={4}>
            <img src="https://placebear.com/200/300" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Searchbar;
