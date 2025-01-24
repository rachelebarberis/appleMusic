import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";
import SectionNovità from "./Components/SectionNovità";
import SectionRadio from "./Components/SectionRadio";
import SectionAltro from "./Components/SectionAltro";
import Footer from "./Components/Footer";
import SectionNuoveUscite from "./Components/SectionNuoveUscite";
import NavbarMd from "./Components/Navbarmd";
import PlayerMd from "./Components/PlayerMd";

function App() {
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col md={2} className="d-none d-lg-block p-0">
            <NavbarMd />
          </Col>
          <Col md={10} className="ps-0 ms-0">
            <div className="fluid d-none d-lg-block ">
              <PlayerMd />
            </div>

            <SectionNovità />
            <SectionRadio />
            <SectionNuoveUscite />
            <SectionAltro />
          </Col>
        </Row>
        <Footer />
      </Container>
    </>
  );
}

export default App;
