import React from "react";
import "./Working.css"

function Working() {
  return (
    <div className="working_wrapper">
      <div className="working_heading">
        <b>How it works</b>
        <div className="underline"></div>
      </div>

      <div className="mobile_row">
        <img src={require("../assets/1_howtoOrder_mock.png")} alt="how to order mock"/>
        <img src={require("../assets/2_howtoOrder_mock.png")} alt="how to order mock"/>
        <img src={require("../assets/3_howtoOrder_mock.png")} alt="how to order mock"/>
        <img src={require("../assets/4_howtoOrder_mock.png")} alt="how to order mock"/>
        <img src={require("../assets/5_howtoOrder_mock.png")} alt="how to order mock"/>
      </div>
    </div>
  );
}

export default Working;
