import React from 'react'
import fresho from "../assets/fresho_logo_png.png"
import offer from "../assets/Offer.png"
import "./Promotion.css"
function Promotion() {
  return (
    <div className='promotion_wrapper'>
          <a href="">
              <img src={fresho} alt="Fresho" />
      </a>
          <a href="">
              <img src={offer} alt="offer" />
      </a>
    </div>
  )
}

export default Promotion
