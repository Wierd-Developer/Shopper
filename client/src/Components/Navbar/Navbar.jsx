import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Navbar.css";
import { BsCart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { SiShopify } from "react-icons/si";

const Navbar = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [show, setShow] = useState("shop");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <SiShopify alt="" style={{ fontSize: "3rem" }} />
          <span>SHOPPER</span>
        </div>
        <ul className="nav-links" style={{ display: "flex" }}>
          <NavLink to={"/"} style={{ height: "20px" }}>
            <li
              onClick={() => {
                setShow("shop");
              }}
            >
              Shop{show === "shop" ? <hr /> : <></>}
            </li>
          </NavLink>
          <NavLink to={"/mens"} style={{ height: "20px" }}>
            <li
              onClick={() => {
                setShow("mens");
              }}
            >
              Mens{show === "mens" ? <hr /> : <></>}
            </li>
          </NavLink>
          <NavLink to={"/womens"} style={{ height: "20px" }}>
            <li
              onClick={() => {
                setShow("womens");
              }}
            >
              Womens{show === "womens" ? <hr /> : <></>}
            </li>
          </NavLink>
          <NavLink to={"/kids"} style={{ height: "20px" }}>
            <li
              onClick={() => {
                setShow("kids");
              }}
            >
              Kids{show === "kids" ? <hr /> : <></>}
            </li>
          </NavLink>
        </ul>
        <div className="nav-logo-cart">
          {isAuthenticated ? (
            <>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="btn"
              >
                Log Out
              </button>
              <button
                style={{
                  height: "45px",
                  width: "45px",
                  borderRadius: "50%",
                  color: "#fff",
                  fontSize: "25px",
                  fontWeight: "500",
                  background: "#33691e",
                  border: "none",
                  opacity: "0.8",
                }}
              >
                {user.name.substring(0, 1)}
              </button>
              <div className="counter-div">
                <BsCart style={{ fontSize: "30px" }} />
                <div className="card-counter">0</div>
              </div>
            </>
          ) : (
            <button onClick={() => loginWithRedirect()} className="btn">
              Login
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
