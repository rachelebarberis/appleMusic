import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import SectionNovità from "./Components/SectionNovità";
import SectionRadio from "./Components/SectionRadio";
import SectionAltro from "./Components/SectionAltro";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <SectionNovità />
      <SectionRadio />
      <SectionAltro />
      <Footer />
    </>
  );
}

export default App;
