import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { MurabahaForm } from "../murabaha/MurabahaForm";
import Button from "react-bootstrap/Button";

function MurabahaPDF() {
  //  const componentRef = useRef();
  //  const handlePrint = useReactToPrint({
  //    content: () => componentRef.current,
  //  });

  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  };
  return (
    <div className="container">
      {/*<MurabahaSetPDF ref={componentRef} />*/}
      <MurabahaForm ref={printRef} />
      <Button
        variant="success"
        onClick={handleDownloadPdf}
        className="mt-5 mb-5"
      >
        Print this out
      </Button>
    </div>
  );
}

export default MurabahaPDF;
