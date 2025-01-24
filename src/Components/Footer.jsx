import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className=" py-3 mt-auto">
      <Row>
        <Col xs="auto" className="text-start mb-1">
          <span className="text-white">Italia</span>
          <span className="mx-2 text-secondary">|</span>
          <span className="text-secondary">English (UK)</span>
        </Col>
      </Row>

      <Row className="my-2">
        <Col xs="auto" className="text-start">
          <span className="text-secondary">
            Copyright © 2024 <span className="text-white">Apple Inc.</span>{" "}
            Tutti i diritti riservati.
          </span>
        </Col>
      </Row>
      <Row>
        <Col xs="auto" className="text-start">
          <a href="#" className="text-decoration-none text-white me-2">
            Condizioni dei servizi internet
          </a>{" "}
          <span className="mx-2 text-secondary ">|</span>
          <a href="#" className="text-decoration-none text-white mx-2">
            Apple Music e privacy
          </a>{" "}
          <span className="mx-2 text-secondary">|</span>
          <a href="#" className="text-decoration-none text-white mx-2">
            Avviso sui cookie
          </a>{" "}
          <span className="mx-2 text-secondary">|</span>
          <a href="#" className="text-decoration-none text-white mx-2">
            Supporto
          </a>{" "}
          <span className="mx-2 text-secondary">|</span>
          <a href="#" className="text-decoration-none text-white mx-2">
            Feedback
          </a>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
