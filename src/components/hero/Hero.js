import { Link } from "react-router-dom";

import "../../css/hero/hero.css";

function Hero() {
  return (
    <div className="hero-div">
      <div className="hero-content">
        <div className="hero-title-flex">
          <h1>
            <span style={{ color: "#2D4D57" }}> FINFO</span>
            <span style={{ color: "#D56F3A" }}>LINK</span>
          </h1>

          <h3>
            It's time to take your Financial Activities in line with Shariah
          </h3>
        </div>

        <div className="hero-btn-div">
          <Link to="/murabaha" className="btn-regular">
            USE AGREEMENT TEMPLATE
          </Link>
          <a
            href="https://youtu.be/ftQjbDlqRNM"
            target="__blank"
            className="btn-white"
          >
            SEE TUTORIAL FIRST
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
