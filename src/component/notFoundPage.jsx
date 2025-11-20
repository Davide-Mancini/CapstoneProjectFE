import { Container } from "react-bootstrap";

import FuzzyText from "../component/FuzzyText/FuzzyText/FuzzyText";
const NotFoundPage = () => {
  return (
    <>
      <Container
        fluid
        className=" vh-100 d-flex justify-content-center align-items-center"
      >
        <div>
          <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={0.2}>
            404 Error
          </FuzzyText>
        </div>
      </Container>
    </>
  );
};
export default NotFoundPage;
