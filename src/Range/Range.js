import React from 'react'
import "./Range.css"

function Range() {
  return (
    <div className="range_wrapper">
      <div className="working_heading">
        <p>
          Explore our<span style={{ fontWeight: "500" }}> Range </span>of
          Products
        </p>
        <div className="underline"></div>
      </div>

      <div className="range-block">
        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_Milk_1024X1024.png")}
            alt="milk"
          />
          <p>Fresh Milk</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_Vegetables_1024X1024.png")}
            alt="vegetable"
          />
          <p> Vegetables</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_Fruits_1024X1024.png")}
            alt="fruits"
          />
          <p> Fruits</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_BakeryDairyEggs_1024X1024.png")}
            alt="bakery"
          />
          <p> Bakery, Dairy & eggs</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_Beverages_1024X1024.png")}
            alt="beverages"
          />
          <p> Beverages</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_BreakfastSnacks_1024X1024.png")}
            alt="Breakfast & Snacks"
          />
          <p> Breakfast & Snacks</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_Staples_1024X1024.png")}
            alt="Foodgrains, Oils & Masalas"
          />
          <p> Foodgrains, Oils & Masalas</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_Pooja_1024X1024.png")}
            alt="Pooja Essentials"
          />
          <p> Pooja Essentials</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_BabyCare_1024X1024.png")}
            alt="Baby Care"
          />
          <p> Baby Care</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_PersonalCare_1024X1024.png")}
            alt="Beauty & Hygiene"
          />
          <p> Beauty & Hygiene</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_HomeCare_1024X1024.png")}
            alt="Cleaning & Household"
          />
          <p> Cleaning & Household</p>
        </div>

        <div className="products">
          <img
            src={require("../assets/bbdaily_SBC_PetCare_1024X1024.png")}
            alt="Pet Care"
          />
          <p> Pet Care</p>
        </div>
      </div>
    </div>
  );
}

export default Range
