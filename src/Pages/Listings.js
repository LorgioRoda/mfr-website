import React from "react";
import Rent from "../Components/Rent";

export default function Listings() {
  return (
    <>
      <div className="">
        <h3>Our listings</h3>
        <p>
          Showcase properties in homepage to be visible and accessible. Select
          the most wanted categories or cities to be displayed in the lists.
        </p>
      </div>
      <Rent />
    </>
  );
}
