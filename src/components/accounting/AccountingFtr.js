import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../../css/accountingftr/accountingftr.css";

function AccountingFtr() {
  return (
    <Container className="accountingftr-container">
      {/*<div className="text-center mb-5">
        <h2 className="section-title">Our Free Templates</h2>
        <p>Agreements backed by subject matter expert</p>
      </div>*/}
      <Row
        xs={1}
        md={3}
        className="g-4 justify-content-center align-items-center accountingftr-row"
      >
        <Col>
          <h3 className="accountingftr-title">
            You and your business partner will get accountingftrted because we
            have ⎯⎯⎯
          </h3>
        </Col>

        <Col>
          <ul className="accountingftr-list">
            <li>
              {" "}
              <h4>✓ Shariah consultant</h4>
            </li>

            <li>
              {" "}
              <h4>✓ Subject matter expert</h4>
            </li>

            <li>
              {" "}
              <h4>✓ One-to-one support</h4>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default AccountingFtr;
