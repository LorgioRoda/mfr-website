import React, { useState } from "react";
import Rent from "../Components/Rent";
import "../assets/styles/Components/Listing.scss"
import Sell from "../Components/Sell";

export default function Listings() {
  const [state, setState] = useState(false)

  const handleClick = () => {
    setState(!state)
  }

  return (
        <div className="listing">
          <h3>Our listings</h3>
          <p>
            Showcase properties in homepage to be visible and accessible. Select
            the most wanted categories or cities to be displayed in the lists.
          </p>
          <button onClick={handleClick}>Butom</button>
          <div>
            {state ? <Rent/> : <Sell/>}
          </div>
        </div>

  )
}
