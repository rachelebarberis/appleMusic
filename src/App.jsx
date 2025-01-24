import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SectionNovità from "./Components/SectionNovità";
import SectionRadio from "./Components/SectionRadio";
import SectionAltro from "./Components/SectionAltro";
import Footer from "./Components/Footer";
import SectionNuoveUscite from "./Components/SectionNuoveUscite";

function App() {
  return (
    <>
      <SectionNovità />
      <SectionRadio />
      <SectionNuoveUscite />
      <SectionAltro />
      <Footer />
    </>
  );
}

export default App;
