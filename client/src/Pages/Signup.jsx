import React from "react";
import { SiShopify } from "react-icons/si";
import "./CSS/Signup.css";
import { NavLink } from "react-router-dom";
import gsignup from "../Assests/signup.png";

const Signup = () => {
  return (
    <form>
      <div className="Signup container">
        <div className="signup-logo my-5">
          <SiShopify
            alt=""
            style={{
              fontSize: "3rem",
            }}
          />
          <h5>Sign in/Sign up to your account</h5>
        </div>
        <div className="signin-input">
          <input placeholder="Email Address" type="email" required />
          <input placeholder="Password" type="password" required />
          <NavLink
            style={{
              fontSize: "13px",
              color: "gray",
              textDecoration: "none",
              marginTop: "-10px",
            }}
          >
            <p>Forgo8t password?</p>
          </NavLink>
        </div>
        <div className="login-button">
          <button className="btn">
            <NavLink
              to={"/"}
              style={{
                margin: "auto",
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "1px",
              }}
            >
              Login
            </NavLink>
          </button>
        </div>
        <div className="google-signup">
          <div className="google-singup-button">
            <button>
              <img src={gsignup} alt="" height={24} />
              <span
                style={{
                  fontSize: "16px",
                  margin: "10px",
                  fontWeight: "600",
                  opacity: "0.8",
                  letterSpacing: "1px",
                }}
              >
                Sign Up with Google
              </span>
            </button>
          </div>
          <NavLink
            style={{
              fontSize: "14px",
              color: "gray",
              textDecoration: "none",
              marginTop: "4px",
            }}
          >
            <p>Don't have an account? Sign Up</p>
          </NavLink>
        </div>
      </div>
    </form>
  );
};

export default Signup;
