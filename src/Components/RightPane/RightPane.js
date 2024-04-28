import React from 'react'
import "./rightPane.css"

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className="addContainer">
          <span className="sponserd">Sponsored</span><br/>
          <img src="/images/adimg.jpg" alt="" className="addImage" />
          <span className="addText">
            Order your food with Tharani Jayathilake food delvery service. We can deliver your food into your door-step within seconds. Order Now..!
          </span>
        </div>
        <div className="birthdayCotainer">
          <img src="/images/gift.jpg" alt="" className="birthdayImage" />
          <span className="birthdayText">
            Pavithra Jayahilake and 2 others having birthday today..!
            </span>
        </div>
      </div>  
    </div>
  )
}
