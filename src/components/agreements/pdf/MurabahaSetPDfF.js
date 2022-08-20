import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

//import navLogo from "../../../img/navlogo.png";
import "../../../css/agreements/murabahaSetPDF.css";

const MurabahaSetPDfF = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Container fluid className="mrbahasetpdf-header mrbahasetpdf-cover-bg">
        <Row xs={1} md={1} className="g-4">
          <Col>
            <div className="mrbahasetpdf-title text-center">
              <h1 className="text-center">BISMILLAHIR RAHMANIR RAHIM</h1>
            </div>
          </Col>
        </Row>
      </Container>{" "}
      <hr />
      <Container className="mrbahasetpdf-form-container">
        <div className="mrbahasetpdf-section-serial mt-4 mb-5">
          <div className="mrbahasetpdf-form-title text-center">
            <h2>Murabaha Agreement</h2>
            <p className="text-dark">
              Following is the Murabaha Agreement between two parties
            </p>
          </div>
          <div className="mrbahasetpdf-date-sub">
            <Form.Group controlId="formBasicEmail">
              {/*<Form.Label>Date: &nbsp;</Form.Label>*/}
              <Form.Control type="text" placeholder="Date:" />
            </Form.Group>
          </div>

          <h4 className="fw-normal mt-5">1. Identification of the Parties </h4>
        </div>
        {/*1. Identification of the Parties*/}
        <Row xs={2} md={2} className="g-4 mrbahasetpdf-form mt-5">
          <Col>
            <h4 className="text-center fw-bold mb-5">BETWEEN</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mr / Messrs*: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nationality*: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact No: &nbsp;</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Identification number*: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
            <p>
              (Hereinafter referred to as the "First Party" which expression
              shall where the context so permits mean and include its successors
              in interest and permitted assigns) of the ONE PART
            </p>
          </Col>

          <Col>
            <h4 className="text-center fw-bold mb-5">AND</h4>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Mr / Messrs*: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nationality*: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Contact No: &nbsp;</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Identification number*: &nbsp;</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Form>
            <p>
              (Hereinafter referred to as the " Second Party " which expression
              shall where the context so permits mean and include its successors
              in interest and assigns) of the OTHER PART.
            </p>
          </Col>
        </Row>
        {/*2. Object of the Murabaha Agreement*/}
        <Row xs={1} md={1} className="g-4 mrbahasetpdf-form mt-1">
          <div className="mrbahasetpdf-section-serial mb-5">
            <h4 className="fw-normal mb-5">
              2. Object of the Murabaha Agreement
            </h4>

            <ul>
              <li>
                The Second Party agrees to sell the Goods to the First Party to
                a maximum amount of{" "}
                <span className="fw-bold">
                  (Currency*) <input type="text" />{" "}
                </span>
                and the First Party agrees to purchase the
                <span className="fw-bold">
                  <input type="text" /> (Goods*)
                </span>{" "}
                from the Second Party at the Contract Price. Upon receipt by the
                Second Party of the First Party's Purchase Requisition advising
                the Second Party to purchase the Goods and making payment
                therefore, the Second Party shall acquire the Goods either
                directly or through the Agent. The payment for such goods shall
                be made by the Second Party on submission of Purchase Advice by
                the client/agent.
              </li>
              <li className="mt-4">
                Upon receipt of purchase of Goods by the Second Party, directly
                or through an Agent, from the Supplier, the Goods shall be at
                the risk and cost of the Second Party until such time that these
                Goods are sold to the First Party.{" "}
              </li>
              <li className="mt-4">
                The First Party’s purchase of Goods from the Second Party shall
                be affected by the exchange of an offer and acceptance between
                the First Party and the Second Party as stipulated in the
                Declaration.{" "}
              </li>
            </ul>
          </div>
        </Row>
        {/*3. Terms and Condition*/}
        <Row xs={1} md={2} className="g-4 mrbahasetpdf-form">
          <Col>
            <h4 className="fw-normal mb-5">3. Terms and Condition</h4>
            <div className="mrbahasetpdf-section-serial">
              <h5 className="fw-normal mb-3">(i) Payment of Contract Price</h5>
              <Table striped bordered hover size="sm" className="mt-5">
                <thead>
                  <tr>
                    <th>Purchase Price*</th>
                    <th>Selling Price*</th>
                    <th>Number of Payment*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Form.Group
                        className="mt-3 mb-3 w-75"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>BDT</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group
                        className="mt-3 mb-3 w-75"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>BDT</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </td>
                    <td>
                      <Form.Group
                        className="mt-3 mb-3 w-75"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>No.</Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <p>
                • All payments to be made by the First Party under this
                Agreement shall be made in full, without any set-off, roll over
                or counterclaim whatsoever, on the due date and when the due
                date is not a Business Day, the following Business Day.{" "}
              </p>
            </div>
          </Col>

          <Col className="align-self-end">
            <div className="mrbahasetpdf-section-serial mb-5">
              <h5 className="fw-normal mb-3">(ii) Events of Default</h5>

              <p className="mb-4">
                • There shall be an Event of Default if in the opinion of the
                Second Party
                <br />
                <br />
                <span className="ms-5">
                  (a) Any representation or warranty made or deemed to be made
                  or repeated by the First Party in or pursuant to the Principal
                  Documents or in any document delivered under this Agreement is
                  found to be incorrect;
                </span>
              </p>
              <p>
                • Notwithstanding anything contained herein, the Second Party
                may without prejudice to any of its other rights, at any time
                after the happening of an Event of Default by notice to the
                First Party declare that entire amount by which the First Party
                is indebted to the Second Party shall forthwith become due and
                payable.
              </p>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={2} className="mt-3 mrbahasetpdf-form">
          <Col>
            <p>
              <b>IN WITNESS WHEREOF, </b> the Parties to this Agreement have
              caused this Agreement to be duly executed on the date and year
              first aforementioned.
            </p>

            <div className="mrbahasetpdf-signature mt-5 bg-light p-3">
              <h5 className="text-center fw-bold mb-5">Signature</h5>

              <div className="first-party">
                <p>1. First Party </p>

                <p>&nbsp; _________________________</p>
              </div>

              <div className="second-party">
                <p>2. Second Party</p>
                <p>_________________________</p>
              </div>
              <div className="guarantor">
                <p>3. Guarantor (If Any)</p>
                <p>_________________________</p>
              </div>
              <p className="ms-3">Details of the Guarantor:</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

//export default MurabahaSetPDfF;
