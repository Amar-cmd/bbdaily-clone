import React from "react";
import "./Footer.css";
import bgImg from "../assets/footer1.png";
import pstore from "../assets/googleplay.png";
import astore from "../assets/astore.png";

function Footer() {


  
  return (
    <div
      className="footer_wrapper"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="footer-first-column">
        <b>Contact Us</b> <br />
        <a href="mailto:amarentp23@gmail.com">amarentp23@gmail.com</a>
        <a href="tel:+919876543210">9876543210</a>
      </div>

      <div className="footer-second-column">
        <p>FAQ</p>
        <p>Daily Ninja FAQ </p>
        <p>Privacy Policy </p>
        <p>Contactless Delivery </p>
        <p>Gourmet Store </p>
        <p>Terms & Conditions </p>
        <p>Milk Subscription digital </p>
        <p>Non-milk Subscription Offers - Sales </p>
        <p>Non-Milk Subscription Offers - BB </p>
        <p>Non-Milk Subscription Offers - Digital</p>
        <p> Non-Milk Subscription Offers - BTL </p>
        <p> Auto recharge</p>
        <p> bbdaily Box </p>
      </div>

      <div className="footer-third-column">
        <div className="cities_left">
          <b>Cities we serve</b> <br />
          <p>Ahmedabad</p>
          <p>Bangalore</p>
          <p>Chandigarh</p>
          <p>Chennai</p>
          <p>Delhi</p>
          <p>Guntur</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Indore</p>
          <p>Kanpur</p>
        </div>

        <div className="cities_right">
          <p>&nbsp;</p>
          <p>Kochi</p>
          <p>Kolkata</p>
          <p>Lucknow</p>
          <p>Mumbai</p>
          <p>Noida</p>
          <p>Patna</p>
          <p>Pune</p>
          <p>Tricity</p>
          <p>Vijayawada</p>
          <p>Vishakhapatnam</p>
        </div>
      </div>
      <div className="footer-fourth-column">
        <b> Download the bbdaily app</b>
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

export default Footer;
