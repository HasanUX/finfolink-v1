//import { useState } from "react";
import React, { useEffect } from "react";
//import { useReactToPrint } from "react-to-print";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import classNames from "classnames";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

//import navLogo from "../../../img/navlogo.png";
import "../../../css/agreements/murabaha.css";
import AgreementCopyright from "../AgreementCopyright";

//  language code

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "bn",
    name: "বাংলা",
    country_code: "bn",
  },
];

export const MurabahaForm = () => {
  //  const [sign, setSign] = useState("");
  //  const [signDataFirst, setSignDataFirst] = useState(null);

  //  const onChangeSignFirst = (e) => {
  //    if (e.target.files[0]) {

  //      const reader = new FileReader();
  //      reader.addEventListener("load", () => {
  //        setSignDataFirst(reader.result);
  //      });
  //      reader.readAsDataURL(e.target.files[0]);
  //    }
  //  };

  const printRef = React.useRef();

  //source: //raw.githack.com/MrRio/jsPDF/master/docs/jsPDF.html

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    //const fontSize = pdf.getFontSize();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    //const pdfHeight = pdf.internal.pageSize.getHeight();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    //pdf.setFontSize(fontSize);

    //addImage(data, format, x, y, w, h, alias, compression);
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight, undefined, "FAST");
    pdf.save("Murabaha.pdf");

    //pdf.addHTML("#murabahaPDF", function () {
    //  pdf.save("murabaha.pdf");
    //});
  };

  //  language selector

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <Dropdown className="lang-dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {t("language")}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {languages.map(({ code, name, country_code }) => (
            <Dropdown.Item
              key={country_code}
              className={classNames("dropdown-item", {
                disabled: currentLanguageCode === code,
              })}
              onClick={() => {
                i18next.changeLanguage(code);
              }}
            >
              {name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div ref={printRef} id="murabahaPDF">
        <Container fluid className="mrbaha-header mrbaha-cover-bg">
          <Row xs={1} md={1} className="g-4">
            <Col>
              <div className="mrbaha-title text-center">
                <h1 className="text-center">{t("basmalah")}</h1>
              </div>
            </Col>
          </Row>
        </Container>{" "}
        <hr />
        <Container className="mrbaha-form-container">
          <div className="mrbaha-section-serial mt-2 mb-3">
            <div className="mrbaha-form-title text-center">
              <h2>{t("agreement_name")}</h2>
              <p className="text-dark">{t("agreement_subtitle")}</p>
            </div>
            <div className="mrbaha-date-sub">
              <Form.Group controlId="formBasicEmail">
                {/*<Form.Label>Date: &nbsp;</Form.Label>*/}
                <Form.Control type="text" placeholder={t("date_placeholder")} />
              </Form.Group>
            </div>

            <h4 className="fw-normal mt-2">{t("first_sec_title")}</h4>
          </div>
          {/*1. Identification of the Parties*/}
          <Row xs={2} md={2} className="g-4 mrbaha-form mt-2">
            <Col>
              <h5 className="text-center fw-bold mb-3">{t("between_term")}</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("mr")}*: &nbsp;</Form.Label>
                  <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("nationality")}*: &nbsp;</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("address")}: &nbsp;</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("contact")}: &nbsp;</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("id")}*: &nbsp;</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
              <p>{t("between_hereinafter")}</p>
            </Col>

            <Col>
              <h5 className="text-center fw-bold mb-3">{t("and_term")}</h5>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("mr")}*: &nbsp;</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("nationality")}*: &nbsp;</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("address")}: &nbsp;</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("contact")}: &nbsp;</Form.Label>
                  <Form.Control type="number" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>{t("id")}*: &nbsp;</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form>
              <p>{t("and_hereinafter")}</p>
            </Col>
          </Row>
          {/*2. Object of the Murabaha Agreement*/}
          <Row xs={1} md={1} className="g-4 mrbaha-form">
            <div className="mrbaha-section-serial mb-2">
              <h4 className="fw-normal mb-2">{t("second_sec_title")}</h4>

              <ul>
                <li>
                  {t("second_first_first_part")}
                  <span className="fw-bold">
                    <b>({t("currency_lable")})* </b>
                    <input type="text" />{" "}
                  </span>
                  {t("second_first_second_part")}{" "}
                  <span className="fw-bold">
                    <b>({t("goods_lable")})* </b>
                    <input type="text" />
                  </span>{" "}
                  {t("second_first_third_part")}{" "}
                </li>
                <li className="mt-1">{t("second_second_part")}</li>
                <li className="mt-1">
                  <li className="mt-1">{t("second_third_part")}</li>
                </li>
              </ul>
            </div>
          </Row>
          {/*3. Terms and Condition*/}
          <Row xs={1} md={2} className="g-4 mrbaha-form">
            <Col>
              <h4 className="fw-normal mb-4">{t("third_sec_title")}</h4>
              <div className="mrbaha-section-serial">
                <h5 className="fw-normal mb-5">{t("third_sec_first_title")}</h5>
                <Table striped bordered hover size="sm" className="mt-3 mb-1">
                  <thead>
                    <tr>
                      <th>{t("purchase_price")}*</th>
                      <th>{t("selling_price")}*</th>
                      <th>{t("no_payment")}*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <Form.Group
                          className="mt-2 w-75"
                          controlId="formBasicEmail"
                        >
                          <Form.Label>BDT</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mt-2 w-75"
                          controlId="formBasicEmail"
                        >
                          <Form.Label>BDT</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="mt-2 w-75"
                          controlId="formBasicEmail"
                        >
                          <Form.Label>No.</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div class="mb-1">
                  <Form.Group className="mt-2 mb-2" controlId="formBasicEmail">
                    {/*<Form.Label>No.</Form.Label>*/}
                    <Form.Control
                      type="text"
                      placeholder={t("add_info_label")}
                    />
                  </Form.Group>
                </div>
                <p>• {t("third_sec_first_part")}</p>
              </div>
            </Col>

            <Col className="align-self-end">
              <div className="mrbaha-section-serial mb-5">
                <h5 className="fw-normal mb-3">
                  {t("third_sec_second_title")}
                </h5>

                <p className="mb-4">
                  • {t("third_sec_second_first_part")}
                  <br />
                  <br />
                  <span className="ms-5">
                    {t("third_sec_second_second_part")}
                  </span>
                </p>
                <p>• {t("third_sec_second_third_part")}</p>
              </div>
            </Col>
          </Row>
          <p>
            <b>{t("witness_bold")} </b> {t("witness")}
          </p>
          {/*<Row xs={1} md={1}>
            <Col>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Additional field
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </div>
            </Col>
          </Row>*/}
          <Row
            xs={1}
            md={6}
            className="mrbaha-form justify-content-evenly align-items-start"
            style={{ marginTop: "7rem" }}
          >
            <Col>
              <div className="first-party">
                <p>_________________________</p>
                <p>{t("first_party")}</p>
                <p>{t("sign_date")}</p>
              </div>
            </Col>
            <Col>
              <div className="first-party">
                <p>_________________________</p>
                <p>{t("second_party")}</p>
                <p>{t("sign_date")}</p>
              </div>
            </Col>

            <Col>
              <div className="first-party">
                <p>_________________________</p>
                <p>{t("guarantor")}</p>
                <p>{t("sign_date")}</p>
                <p>{t("guarantor_details")}</p>
              </div>
            </Col>

            {/*<div className="mrbaha-signature mt-2 bg-light p-3">
                <h5 className="text-center fw-bold mb-5">Signature</h5>

                <div className="first-party">
                  <p>_________________________</p>
                  <p>1. First Party </p>
                </div>

                <div className="second-party">
                  <p>_________________________</p>
                  <p>2. Second Party</p>
                </div>
                <div className="guarantor">
                  <p>_________________________</p>
                  <p>3. Guarantor (If Any)</p>
                </div>
                <p className="ms-3">Details of the Guarantor:</p>
              </div>*/}
          </Row>
        </Container>
        <AgreementCopyright />
      </div>

      <Button
        variant="success"
        onClick={handleDownloadPdf}
        className="float-start"
        style={{ marginLeft: "5rem" }}
        type="submit"
      >
        {t("print_label")}
      </Button>
    </>
  );
};

export default MurabahaForm;

//export const MurabahaSetPDF = React.forwardRef((props, ref) => {
//  return (
//    <div ref={ref}>
//      <Container fluid className="mrbahasetpdf-header mrbahasetpdf-cover-bg">
//        <Row xs={1} md={1} className="g-4">
//          <Col>
//            <div className="mrbahasetpdf-title text-center">
//              <h1 className="text-center">
//                BISMILLAHIR RAHMANIR RAHIM Alhamdulillah
//              </h1>
//            </div>
//          </Col>
//        </Row>
//      </Container>{" "}
//      <hr />
//      <Container className="mrbahasetpdf-form-container">
//        <div className="mrbahasetpdf-section-serial mt-4 mb-5">
//          <div className="mrbahasetpdf-form-title text-center">
//            <h2>Murabaha Agreement</h2>
//            <p className="text-dark">
//              Following is the Murabaha Agreement between two parties
//            </p>
//          </div>
//          <div className="mrbahasetpdf-date-sub">
//            <Form.Group controlId="formBasicEmail">
//              {/*<Form.Label>Date: &nbsp;</Form.Label>*/}
//              <Form.Control type="text" placeholder="Date:" />
//            </Form.Group>
//          </div>

//          <h4 className="fw-normal mt-5">1. Identification of the Parties </h4>
//        </div>
//        {/*1. Identification of the Parties*/}
//        <Row xs={2} md={2} className="g-4 mrbahasetpdf-form mt-5">
//          <Col>
//            <h4 className="text-center fw-bold mb-5">BETWEEN</h4>
//            {/*<p>Name: {name}</p>*/}
//            <Form>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Mr / Messrs*: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Nationality*: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Address: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Contact No: &nbsp;</Form.Label>
//                <Form.Control type="number" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Identification number*: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//            </Form>
//            <p>
//              (Hereinafter referred to as the "First Party" which expression
//              shall where the context so permits mean and include its successors
//              in interest and permitted assigns) of the ONE PART
//            </p>
//          </Col>

//          <Col>
//            <h4 className="text-center fw-bold mb-5">AND</h4>
//            <Form>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Mr / Messrs*: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Nationality*: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Address: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Contact No: &nbsp;</Form.Label>
//                <Form.Control type="number" />
//              </Form.Group>
//              <Form.Group className="mb-3" controlId="formBasicEmail">
//                <Form.Label>Identification number*: &nbsp;</Form.Label>
//                <Form.Control type="text" />
//              </Form.Group>
//            </Form>
//            <p>
//              (Hereinafter referred to as the " Second Party " which expression
//              shall where the context so permits mean and include its successors
//              in interest and assigns) of the OTHER PART.
//            </p>
//          </Col>
//        </Row>
//        {/*2. Object of the Murabaha Agreement*/}
//        <Row xs={1} md={1} className="g-4 mrbahasetpdf-form mt-1">
//          <div className="mrbahasetpdf-section-serial mb-5">
//            <h4 className="fw-normal mb-5">
//              2. Object of the Murabaha Agreement
//            </h4>

//            <ul>
//              <li>
//                The Second Party agrees to sell the Goods to the First Party to
//                a maximum amount of{" "}
//                <span className="fw-bold">
//                  (Currency*) <input type="text" />{" "}
//                </span>
//                and the First Party agrees to purchase the
//                <span className="fw-bold">
//                  <input type="text" /> (Goods*)
//                </span>{" "}
//                from the Second Party at the Contract Price. Upon receipt by the
//                Second Party of the First Party's Purchase Requisition advising
//                the Second Party to purchase the Goods and making payment
//                therefore, the Second Party shall acquire the Goods either
//                directly or through the Agent. The payment for such goods shall
//                be made by the Second Party on submission of Purchase Advice by
//                the client/agent.
//              </li>
//              <li className="mt-4">
//                Upon receipt of purchase of Goods by the Second Party, directly
//                or through an Agent, from the Supplier, the Goods shall be at
//                the risk and cost of the Second Party until such time that these
//                Goods are sold to the First Party.{" "}
//              </li>
//              <li className="mt-4">
//                The First Party’s purchase of Goods from the Second Party shall
//                be affected by the exchange of an offer and acceptance between
//                the First Party and the Second Party as stipulated in the
//                Declaration.{" "}
//              </li>
//            </ul>
//          </div>
//        </Row>
//        {/*3. Terms and Condition*/}
//        <Row xs={1} md={2} className="g-4 mrbahasetpdf-form">
//          <Col>
//            <h4 className="fw-normal mb-5">3. Terms and Condition</h4>
//            <div className="mrbahasetpdf-section-serial">
//              <h5 className="fw-normal mb-3">(i) Payment of Contract Price</h5>
//              <Table striped bordered hover size="sm" className="mt-5">
//                <thead>
//                  <tr>
//                    <th>Purchase Price*</th>
//                    <th>Selling Price*</th>
//                    <th>Number of Payment*</th>
//                  </tr>
//                </thead>
//                <tbody>
//                  <tr>
//                    <td>
//                      <Form.Group
//                        className="mt-3 mb-3 w-75"
//                        controlId="formBasicEmail"
//                      >
//                        <Form.Label>BDT</Form.Label>
//                        <Form.Control type="text" />
//                      </Form.Group>
//                    </td>
//                    <td>
//                      <Form.Group
//                        className="mt-3 mb-3 w-75"
//                        controlId="formBasicEmail"
//                      >
//                        <Form.Label>BDT</Form.Label>
//                        <Form.Control type="text" />
//                      </Form.Group>
//                    </td>
//                    <td>
//                      <Form.Group
//                        className="mt-3 mb-3 w-75"
//                        controlId="formBasicEmail"
//                      >
//                        <Form.Label>No.</Form.Label>
//                        <Form.Control type="text" />
//                      </Form.Group>
//                    </td>
//                  </tr>
//                </tbody>
//              </Table>
//              <p>
//                • All payments to be made by the First Party under this
//                Agreement shall be made in full, without any set-off, roll over
//                or counterclaim whatsoever, on the due date and when the due
//                date is not a Business Day, the following Business Day.{" "}
//              </p>
//            </div>
//          </Col>

//          <Col className="align-self-end">
//            <div className="mrbahasetpdf-section-serial mb-5">
//              <h5 className="fw-normal mb-3">(ii) Events of Default</h5>

//              <p className="mb-4">
//                • There shall be an Event of Default if in the opinion of the
//                Second Party
//                <br />
//                <br />
//                <span className="ms-5">
//                  (a) Any representation or warranty made or deemed to be made
//                  or repeated by the First Party in or pursuant to the Principal
//                  Documents or in any document delivered under this Agreement is
//                  found to be incorrect;
//                </span>
//              </p>
//              <p>
//                • Notwithstanding anything contained herein, the Second Party
//                may without prejudice to any of its other rights, at any time
//                after the happening of an Event of Default by notice to the
//                First Party declare that entire amount by which the First Party
//                is indebted to the Second Party shall forthwith become due and
//                payable.
//              </p>
//            </div>
//          </Col>
//        </Row>
//        <Row xs={1} md={2} className="mt-3 mrbahasetpdf-form">
//          <Col>
//            <p>
//              <b>IN WITNESS WHEREOF, </b> the Parties to this Agreement have
//              caused this Agreement to be duly executed on the date and year
//              first aforementioned.
//            </p>

//            <div className="mrbahasetpdf-signature mt-5 bg-light p-3">
//              <h5 className="text-center fw-bold mb-5">Signature</h5>

//              <div className="first-party">
//                <p>1. First Party </p>

//                <p>&nbsp; _________________________</p>
//              </div>

//              <div className="second-party">
//                <p>2. Second Party</p>
//                <p>_________________________</p>
//              </div>
//              <div className="guarantor">
//                <p>3. Guarantor (If Any)</p>
//                <p>_________________________</p>
//              </div>
//              <p className="ms-3">Details of the Guarantor:</p>
//            </div>
//          </Col>
//        </Row>
//      </Container>
//    </div>
//  );
//});

//export default MurabahaSetPDF;
