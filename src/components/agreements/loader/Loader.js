import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import "../../../css/agreements/loader.css";

function Loader() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //  const handleShow = () => setShow(true);

  const pdfLoader = () => {
    setShow(true);
    setTimeout(() => {
      navigate("/murabaha-copy");
    }, 1000);
    //setLoading((loading) => !loading);
  };

  return (
    <>
      <Button variant="dark" onClick={pdfLoader}>
        Download PDF
      </Button>

      <Modal show={show} onHide={handleClose}>
        <h4 className="p-4 text-center">
          Congratulations! you are chosen to act upon one of the commandments of
          Allah
        </h4>
        <div class="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>
        <p className="text-center">Your PDF is generating</p>
      </Modal>
    </>
  );
}

export default Loader;
