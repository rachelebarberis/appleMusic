import { Container, Row, Col, Form, Button } from "react-bootstrap";
const PlayerMd = () => {
  return (
    <Container
      fluid={true}
      className="text-secondary py-1"
      style={{ backgroundColor: "#252526" }}
    >
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs={3} className="d-flex justify-content-center">
          <i className="bi bi-shuffle ps-1"></i>
          <i className="bi bi-skip-start-fill  ps-1"></i>
          <i className="bi bi-play-circle-fill  ps-1"></i>
          <i className="bi bi-skip-end-fill ps-1 "></i>
          <i className="bi bi-arrow-repeat ps-1 "></i>
        </Col>

        <Col
          xs={6}
          className="d-flex justify-content-center p-2"
          style={{ backgroundColor: "#4D4D4D" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="24"
            version="1.1"
            viewBox="0 0 20 24"
            fill="white"
          >
            <path d="M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z"></path>
          </svg>
        </Col>

        <Col xs={3} className="d-flex align-items-center justify-content-end ">
          <Form.Range className="w-25" />
          <Button
            className="rounded-1 border border-dark py-2 pt-0 ms-2"
            style={{ backgroundColor: "#D60017" }}
          >
            <i className="bi bi-person-fill pb-1 pe-2"></i> Accedi
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerMd;
