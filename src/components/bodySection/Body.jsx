import React from "react";
import "./body.css";
import Top from "./topSection/Top";
import Listing from "../bodySection/listingSection/Listing";
import Activity from "./activitySection/Activity";

const Body = () => {
  return (
    <div className="mainContent">
      <Top />
      <div className="bottom flex">
        <Listing />
        <Activity />
      </div>
    </div>
  );
};

export default Body;
