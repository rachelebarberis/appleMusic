import { Container, Row, Col } from "react-bootstrap";

const SectionAltro = () => {
  return (
    <Container fluid={true} className="mt-3 ms-5 ms-lg-0">
      <p className="text-white fw-bold">Altro da Esplorare</p>
      <Row>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2"
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Esplora per genere</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2"
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Decenni</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right "
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2"
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Attivtà e stati d&apos;animo</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2 "
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Worldwide</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2 "
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Classifiche</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2 "
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Audio spaziale</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2 "
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Video Musicali</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2 "
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Nuovi artisti</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={4}>
          <div
            className="pt-3 ps-2 m-1 rounded-2 "
            style={{ backgroundColor: "#2A2A2A" }}
          >
            <Row className="justify-content-between">
              <Col xs={10}>
                <p style={{ color: "#EB5465" }}>Hit del passato</p>
              </Col>
              <Col xs={2}>
                <i
                  className="bi bi-chevron-right"
                  style={{ color: "#EB5465" }}
                ></i>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default SectionAltro;
