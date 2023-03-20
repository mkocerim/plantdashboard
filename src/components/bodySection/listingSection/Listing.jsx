import React from "react";
import "./listing.css";

//imported Icons=====>>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

//imported Images=====>>>
import img3 from "../../../Assets/images/image3.jpg";

const Listing = () => {
  return (
    <div className="listingSection">
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img3} alt="Image Name" />
          <h1>Annual Vince</h1>
        </div>
      </div>
    </div>
  );
};

export default Listing;
