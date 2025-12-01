import Carousel from "react-bootstrap/Carousel";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../style/carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAction } from "../redux/actions/getNewsActions";
import "../style/fireworks.css";
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
    <Container className=" border rounded-5 text-light my-5 gradienteDiSfondo ">
      <Row>
        <Col xs={12} className=" p-5">
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
                  <h3>{singleNews?.title}</h3>
                  <p>{singleNews?.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Mycarousel;
