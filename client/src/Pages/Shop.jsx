import React from "react";
import Carousal from "../Components/Carousal";
import "./CSS/shop.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import andres from "./../Assests/Andres.png";
import NewCollection from "../Components/Newcollections/NewCollection";
import SwipeableCrousal from "../Components/Swiper/SwipeableCrousal";
const Shop = () => {
  return (
    <>
      <div style={{ marginTop: "40px" }}>
        <Carousal />
        <div className="hero-headline">
          <h4>
            Get The Best Product
            <br />
            &nbsp; &nbsp;&nbsp; At Your Home
          </h4>
          <div className="trends">
            <button className="trend-button">
              Latest Collections
              <IoArrowForwardOutline style={{ fontSize: "20px" }} />
            </button>
          </div>
        </div>
        <div className="exclusive-offer">
          <div className="offer-body ">
            <h1>Exclusive</h1>
            <h1>Offer For You</h1>
            <p>Only On Best Sellers Products</p>
            <button>Check Now</button>
          </div>
          <div className="right-banner mx-auto my-4">
            <img src={andres} alt="" style={{ height: "50vh" }} />
          </div>
        </div>
        <div className="new-collection-category">
          <h1
            style={{
              textAlign: "center",
              fontSize: "60px",
              letterSpacing: "2px",
              fontWeight: "600",
              color: " #535faf",
              fontFamily: "sans-serif",
              // transform: "translateX(-5%)",
              // transition: "transform 0.5s ease-in-out",
            }}
          >
            New
          </h1>
          <h3
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "600",
              color: "rgba(0, 0, 0, 0.747)",
              fontFamily: "sans-serif",
              marginTop: "-16px",
            }}
          >
            Collections
          </h3>
          <p
            style={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "600",
              color: "rgba(0, 0, 0, 0.747)",
              fontFamily: "sans-serif",
              marginTop: "-10px",
              borderBottom: "0.2px solid rgba(180, 177, 177, 0.747)",
              width: "70%",
              margin: "auto",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Are Here
          </p>

          <NewCollection />
        </div>
      </div>
    </>
  );
};

export default Shop;
