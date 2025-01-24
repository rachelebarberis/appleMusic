import { Container, Row, Col } from "react-bootstrap";
const SectionRadio = () => {
  return (
    <Container fluid={true} className="ms-5 ms-lg-0">
      <div className="mt-4">
        <p className="fw-bold text-white">
          Nuove uscite radio <i className="bi bi-chevron-right"></i>
        </p>
      </div>
      <Row>
        <Col xs={4} lg={2}>
          <div>
            <img
              src="../public/assets/images/2a.png"
              className="img-fluid rounded-2"
            />
            <p className="text-white">Prologo con Abuelo</p>
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div>
            <img
              src="../public/assets/images/2b.png"
              className="img-fluid rounded-2"
            />
            <p className="text-white">Feel More</p>
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div>
            <img
              src="../public/assets/images/2c.png"
              className="img-fluid rounded-2"
            />
            <p className="text-white">Micheal Bublè</p>
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div className="d-none d-md-block">
            <img
              src="../public/assets/images/2d.png"
              className="img-fluid rounded-2 "
            />
            <p className="text-white">Stephan Moccio</p>
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div className="d-none d-md-block">
            <img
              src="../public/assets/images/2e.png"
              className="img-fluid rounded-2 "
            />
            <p className="text-white">Julia Michaels</p>
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div className="d-none d-md-block">
            <img
              src="../public/assets/images/2f.png"
              className="img-fluid rounded-2 "
            />
            <p className="text-white">Mills</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionRadio;
