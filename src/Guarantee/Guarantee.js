import React from "react";
import "./Guarantee.css"
function Guarantee() {
  return (
    <div className="guarantee_wrapper">
      <div className="guarantee_heading">
        <p>
          We <span style={{ fontWeight: "500" }}>Guarantee You </span>
        </p>
        <div className="guarantee_underline"></div>
      </div>

      <div className="guarantee_block">
        <div className="guarantee_item">
          <img
            src={require("../assets/Guarantees_Icon-01.png")}
            alt="On-time every time guaranteed"
          />
          <p>On-time every time guaranteed</p>
        </div>

        <div className="guarantee_item">
          <img
            src={require("../assets/Guarantees_Icon-03.png")}
            alt="Freshness you can trust (100% safe & unadulterated milk"
          />
          <p>Freshness you can trust (100% safe & unadulterated milk)</p>
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
