import React from "react";
import "./Use.css";
import bgImg from "../assets/milkmilk.png";
import freshness from "../assets/bbdailyicon2.png";
import reliability from "../assets/bbdailyicon1.png";
import convenience from "../assets/bbdailyicon3.png";
import choice from "../assets/bbdailyicon4.png";
import minimum from "../assets/bbdailyicon5.png";

function Use() {
  return (
    <div className="use_wrapper" style={{ backgroundImage: `url(${bgImg})` }}>
      <div className="working_heading">
        <p>
          <span style={{ fontWeight: "500" }}>Why </span>use bbdaily?{" "}
        </p>
        <div className="underline"></div>
      </div>

      <div className="block-container">
        <div className="block-item">
          <img
            className="freshness"
            src={freshness}
            alt="Freshness"
            loading="lazy"
          />
          <b>Freshness</b>
          <p>You can trust</p>
        </div>

        <div className="block-item">
          <img
            className="reliability"
            src={reliability}
            alt="reliability"
            loading="lazy"
          />
          <b>Reliability</b>
          <p>Daily delivery</p>
          <p>Before 7:00 AM</p>
        </div>

        <div className="block-item">
          <img src={convenience} alt="convenience" loading="lazy" />
          <b>Convenience</b>
          <p>Easy to use</p>
          <p>(Subscribe - pause & resume anytime)</p>
        </div>

        <div className="block-item">
          <img src={choice} alt="Choice" loading="lazy" />
          <b>Choice</b>
          <p>Wide range of milk + other daily essentials</p>
        </div>

        <div className="block-item">
          <img className="minimum" src={minimum} alt="minimum" loading="lazy" />
          <b>Minimum</b>
          <p>Daily delivery</p>
          <p>Before 7:00 AM</p>
        </div>
      </div>
    </div>
  );
}

export default Use;
