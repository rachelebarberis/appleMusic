import { Container, Row, Col } from "react-bootstrap";
const SectionNovità = () => {
  return (
    <Container>
      <div style={{ borderBottom: "1px solid grey" }}>
        <h1 className="text-white text-start fw-bold">Novità</h1>
      </div>
      <Row>
        <Col xs={6}>
          <p className="text-secondary pt-3">
            NUOVA STADIO RADIO <br></br> Rilassati, al resto pensiamo noi.
            Ascolta App Music Chill
          </p>
        </Col>
        <Col xs={6}>
          <p className="text-secondary pt-3">
            NUOVA STADIO RADIO <br></br> Ecco la nuova casa della musica latina
          </p>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <div>
            <img
              src="../public/assets/images/1a.png"
              className="img-fluid rounded-2"
              alt="img1"
            />
          </div>
        </Col>
        <Col xs={6}>
          <div>
            <img
              src="../public/assets/images/1b.png"
              className="img-fluid rounded-2"
              alt="img2"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionNovità;
