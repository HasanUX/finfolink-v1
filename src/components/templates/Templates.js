import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import { Link } from "react-router-dom";

import murabahaimg from "../../img/murabahaimg.jpeg";
import musharakahimg from "../../img/musharakahimg.jpeg";
import qardimg from "../../img/qardimg.jpeg";
import "../../css/templates/templates.css";

function Templates() {
  const templateContent = [
    {
      contentOne: {
        id: 1,
        title: "Mudarabah agreement",
      },

      contentTwo: {
        id: 2,
        title: "Musharakah agreement",
      },

      contentThree: {
        id: 3,
        title: "Qard e hasana",
      },
    },
  ];

  return (
    <Container className="templates-container">
      <div className="text-center mb-5">
        <h2 className="section-title">Our Free Templates</h2>
        <p>Agreements backed by subject matter expert</p>
      </div>
      <Row xs={1} md={3} className="g-4">
        <Col>
          <Link to="/murabaha" className="templates-link">
            <Card className="template-card">
              <Badge bg="warning" className="template-badge">
                Now available
              </Badge>
              <Card.Img
                variant="top"
                src={murabahaimg}
                className="template-img"
              />
              <Card.Body className="template-body">
                <Card.Title className="text-white template-title">
                  Murabaha Agreement
                </Card.Title>
                <p className="text-white">Use our agreement template</p>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col>
          <Link to="/musharakah" className="templates-link">
            <Card className="template-card">
              <Card.Img
                variant="top"
                src={musharakahimg}
                className="template-img"
              />
              <Card.Body className="template-body">
                <Card.Title className="text-white template-title">
                  Musharakah Agreement
                </Card.Title>
                <p className="text-white">Coming soon</p>
              </Card.Body>
            </Card>
          </Link>
        </Col>

        <Col>
          <Link to="/mudarabah" className="templates-link">
            <Card className="template-card">
              <Card.Img variant="top" src={qardimg} className="template-img" />
              <Card.Body className="template-body">
                <Card.Title className="text-white template-title">
                  Qard Al Hasan Agreement
                </Card.Title>
                <p className="text-white">Coming soon</p>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Templates;
