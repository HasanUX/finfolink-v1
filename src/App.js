import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import Hero from "./components/hero/Hero";
import Templates from "./components/templates/Templates";
import Coming from "./components/coming/Coming";
import Footer from "./components/footer/Footer";
import MurabahaForm from "./components/agreements/murabaha/MurabahaForm";
import AgreementCopyright from "./components/agreements/AgreementCopyright";
import HeroMock from "./components/hero/HeroMock";
import Benefits from "./components/benefits/Benefits";
import Goal from "./components/goal/Goal";
import MurabahaPDF from "./components/agreements/pdf/MurabahaPDF";

function App() {
  return (
    <Router>
      <div className="App">
        {/*home */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div id="page-container">
                <div id="content-wrap">
                  <NavBar />
                  <Hero />
                  <HeroMock />
                  <Templates />
                  <Benefits />
                  <Coming />
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>

        {/*Murabaha agreements */}
        <Routes>
          <Route
            exact
            path="/murabaha"
            element={
              <div id="page-container">
                <div id="content-wrap">
                  <NavBar />
                  <MurabahaForm />
                  {/*<AgreementCopyright />*/}
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>

        {/*Murabaha agreements - PDF */}
        <Routes>
          <Route exact path="/murabaha-copy" element={<MurabahaPDF />} />
        </Routes>

        {/*Our goal */}
        <Routes>
          <Route
            exact
            path="/goal"
            element={
              <div id="page-container">
                <div id="content-wrap">
                  <NavBar />
                  <Goal />
                </div>
                <Footer />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
