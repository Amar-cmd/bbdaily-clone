import React from 'react'
import "./Home.css"
import pstore from "../assets/googleplay.png";
import astore from "../assets/astore.png";
function Home() {
  return (
    <div className="background">
      <div className="text">
        <h2>
          <span>big</span>basket introduces bbdaily
        </h2>

        <p className="title">start fresh everyday</p>
        <p>Fresh milk and groceries home delivered</p>
        <p>Your online milk delivery app. Download now.</p>

        <div className="button-group">
          <a href="https://play.google.com/store/apps/details?id=com.raincan.android.hybrid&hl=en_IN&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
            <img className="pstore" src={pstore} alt="Play Store" />
          </a>

          <a href="https://apps.apple.com/in/app/bbdaily/id1148331468">
            <img className="astore" src={astore} alt="Apple Store" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home
