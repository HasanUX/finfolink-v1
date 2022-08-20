import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import aboutimg1 from "../../img/aboutimg1.jpeg";
import aboutimg2 from "../../img/aboutimg2.png";
import "../../css/goal/goal.css";

function Goal() {
  return (
    <Container className="goal-container">
      <div className="text-center mb-5">
        <h2 className="section-title">Our Goal</h2>
        <p className="">
          <span className="fw-bold">
            <u>Ayat Al-dayn</u>
          </span>{" "}
          is our core arsenal
        </p>
      </div>

      <Row xs={1} md={3} className="mt-5 justify-content-center">
        <Col className="about-second align-self-center">
          <h3 className="mb-4">Let your good wealth grow</h3>
          <p>
            ❝Who will lend to Allah a good loan which Allah will multiply many
            times over? It is Allah alone who decreases and increases wealth.
            And to Him you will ˹all˺ be returned. (2:245)❞
          </p>
        </Col>
        <Col className="">
          <img
            src={aboutimg2}
            alt="finfolink-goal-img-2"
            className="finfolink-goal-img-2"
          />
        </Col>
      </Row>
      <div xs={1} md={2} className="goal-flex mt-5">
        <div className="mt-5">
          <img
            src={aboutimg1}
            alt="finfolink-goal-img-1"
            className="finfolink-goal-img-1"
          />
        </div>
        <div className="about-first mt-5">
          <h3 className="mb-4">
            Our solution is to make Islamic agreement docs accessible online
          </h3>
          <p>
            ❝O believers! When you contract a loan for a fixed period of time,
            commit it to writing. Let the scribe maintain justice between the
            parties. The scribe should not refuse to write as Allah has taught
            them to write. They will write what the debtor dictates, bearing
            Allah in mind and not defrauding the debt. If the debtor is
            incompetent, weak, or unable to dictate, let their guardian dictate
            for them with justice. Call upon two of your men to witness. If two
            men cannot be found, then one man and two women of your choice will
            witness—so if one of the women forgets the other may remind her.1
            The witnesses must not refuse when they are summoned...(2:282)❞
          </p>
        </div>
      </div>

      {/*<Row xs={1} md={3} className="justify-content-center">
        <Col>
          <Card border="primary">
            <Card.Header>Awareness</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header>Professionalism</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="primary">
            <Card.Header>Responsibility</Card.Header>
            <Card.Body>
              <Card.Title>Primary Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>*/}
    </Container>
  );
}

export default Goal;
