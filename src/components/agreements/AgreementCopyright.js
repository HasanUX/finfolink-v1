import Loader from "./loader/Loader";
import favicon from "../../img/favicon.png";
import "../../css/agreements/murabaha.css";

function AgreementCopyright() {
  return (
    <div className="container">
      <div className="ag-cp-content mt-1 mb-5">
        <img src={favicon} alt="logo-icon" className="logo-icon" />
        <h4>
          Agreement made by Finfo<span style={{ color: "#f37134" }}>link</span>
        </h4>
      </div>
      {/*<Loader />*/}
    </div>
  );
}

export default AgreementCopyright;
