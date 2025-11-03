import { Col, Container, Row } from "react-bootstrap";

const HeroSection = () => {
  return (
    <>
      <Container
        /*class="container col-xxl-8 px-4 py-5" */ fluid
        className=" px-4 py-5 col-xxl-8 w-100"
      >
        <Row
          /*</Container>class="row flex-lg-row-reverse align-items-center g-5 py-5" */ className=" d-flex align-items-center g-5 py-5 flex-lg-row-reverse "
        >
          <Col className="col-10 col-sm-8 col-lg-6 mx-auto">
            <video
              src="src\assets\macbook-subtle-turn (1).mp4"
              autoPlay
              loop
              muted
              playsInline
              className=" w-100"
            />
          </Col>
          <Col className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Il nuovo tool per la gestione della tua asta!
            </h1>
            <p className=" lead">
              Organizza la tua asta nel modo perfetto, con AstaTool puoi gestire
              la tua asta online.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Inizia Asta
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Come Funziona
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HeroSection;
