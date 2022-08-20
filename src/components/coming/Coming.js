import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import comingapp from "../../img/comingapp.png";
import comingbgimg from "../../img/comingbg.png";
import googleplay from "../../img/googleplay.jpeg";

import "../../css/coming/coming.css";

function Coming() {
  return (
    <Container fluid className="coming-container">
      <div className="text-center mb-5">
        <h2 className="section-title">One App Fits All</h2>
        <p>Welcome to the next big thing - Lets join towards creed</p>
      </div>
      <Row className="coming-row mt-5">
        <div className="google-play">
          <h3 className="fw-bold">COMING UP ON</h3>
          <img src={googleplay} alt="google-play" />
        </div>
        <div className="coming-bg-div"></div>
        <img src={comingbgimg} alt="coming-app" className="coming-bg-img" />
        <img src={comingapp} alt="coming-app" className="coming-app" />
      </Row>
    </Container>
  );
}

export default Coming;
