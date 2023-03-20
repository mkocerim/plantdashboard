import React from "react";
import "./listing.css";

//imported Icons=====>>
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

//imported Images=====>>>
import img1 from "../../../Assets/images/image5.jpg";
import img2 from "../../../Assets/images/image19.jpg";
import img3 from "../../../Assets/images/image16.jpg";
import img4 from "../../../Assets/images/image14.jpg";
import usr1 from "../../../Assets/images/user2.jpg";
import usr2 from "../../../Assets/images/user3.jpg";
import usr3 from "../../../Assets/images/user4.jpg";
import usr4 from "../../../Assets/images/user5.jpg";

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
          <img src={img1} alt="Image Name" />
          <h3>Annual Vince</h3>
        </div>

        <div className="singleItem ">
          <AiOutlineHeart className="icon" />
          <img src={img2} alt="Image Name" />
          <h3>Coffe Plant</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className="icon" />
          <img src={img3} alt="Image Name" />
          <h3>Button Fern</h3>
        </div>

        <div className="singleItem">
          <AiFillHeart className="icon" />
          <img src={img4} alt="Image Name" />
          <h3>Spider Plant</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={usr1} alt="User Image" />
              <img src={usr2} alt="User Image" />
              <img src={usr3} alt="User Image" />
              <img src={usr4} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                11.257 plant sold <br />{" "}
                <small>
                  72 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort className="icon" />
            </button>
          </div>
          <div className="card flex">
            <div className="users">
              <img src={usr4} alt="User Image" />
              <img src={usr2} alt="User Image" />
              <img src={usr1} alt="User Image" />
              <img src={usr3} alt="User Image" />
            </div>
            <div className="cardText">
              <span>
                23,257 plant sold <br />
                <small>
                  28 Sellers <span className="date">27 Days</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
