import React from 'react'
import rent507 from "../assets/static/rent_507west.png"
import bed from "../assets/static/bed.svg";
import relax from "../assets/static/relax.svg";
import bath from "../assets/static/bath.svg";

export default function Rent() {
    return (
        <div className="rent">
            <button>Rentals</button>
            <img src={rent507} alt=""/>
            <div className="rent__container">
                <h4>Title</h4>
                <p><span>$ 2313 / month</span></p>
                <p>Come live in this LUXURY FULL service building with 24-hour doorman & amazing amenities.</p>
                <div className="rent__icons">
                    <img src={bed} alt=""/>
                    <p>2</p>
                    <img src={relax} alt=""/>
                    <p>2</p>
                    <img src={bath} alt=""/>
                    <p>2</p>
                </div>
            </div>
        </div>
    )
}
