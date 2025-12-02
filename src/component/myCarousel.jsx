import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAction } from "../redux/actions/getNewsActions";
import "../style/fireworks.css";
import { Link } from "react-router-dom";
// INSERISCO UN CAROSELLO CON DELLE NOTIZIE SULLA SERIE A AGGIORNATE TRAMITE UN RSS DELLA GAZZETTA DELLO SPORT
function Mycarousel() {
  const dispatch = useDispatch();

  //FETCH PER RECUPERARE LE NOTIZIE
  useEffect(() => {
    dispatch(getNewsAction());
  }, []);

  const news = useSelector((state) => {
    return state.news.news;
  });
  return (
    <>
      <div
        className=" border border-3 rounded-4 border-warning w-25 mx-auto text-light"
        style={{ marginTop: "100px" }}
      >
        <h1 className=" text-center fw-bold">Flash News</h1>
      </div>
      <Container
        style={{ marginBottom: "180px" }}
        className=" border border-warning border-3 rounded-5 text-light mt-4  gradienteDiSfondo p-5 w-50 "
      >
        <Row>
          <Col xs={12} className=" p-3">
            <Carousel fade className=" w-100 mx-auto p-4">
              {/* MAP DELLE NOTIZIE FORNITE DA GAZZETTA */}
              {news.map((singleNews, id) => (
                <Carousel.Item interval={7000} key={id}>
                  <img
                    src={singleNews?.thumbnail}
                    alt=""
                    className=" w-100 mx-auto rounded-4"
                  />
                  <Carousel.Caption>
                    <Link
                      to={"/campetto"}
                      className=" text-decoration-none text-light"
                    >
                      <h3>{singleNews?.title}</h3>
                    </Link>
                    {/* <p>{singleNews?.description}</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Mycarousel;
