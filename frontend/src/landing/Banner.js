import "./Banner.css";
import banner from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMenu, mdiMagnify, mdiClose } from "@mdi/js";
import { useState } from "react";

export default function Banner() {
  const [visibility, setVisibility] = useState(false);
  const menu = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="banner">
      <div className="new-menu" style={{ display: visibility ? null : "none" }}>
        <ul className="new-nav">
          <li>
            {" "}
            <a href="/">About us</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <Link to="/gasme-fe-pjt-3/login">Login</Link>
          </li>
          <li style={{ borderBottom: "0px" }}>
            <a href="/">Create Account</a>
          </li>
        </ul>
        <button onClick={() => menu()} className="menu">
          <Icon
            path={mdiClose}
            title="menu"
            size={1.3}
            color="#deeee5"
            className="imenu"
          />
        </button>
      </div>
      <div className="top">
        <div className="logo">
          <img width="70px" src={banner} alt="" />
        </div>
        <nav>
          <li>About Us</li>
          <li>Services</li>
          <li>Contact Us</li>
        </nav>
        <div className="buttons">
            <Link className="login-link" to="/gasme-fe-pjt-3/login">
          <button className="login">
              Login
          </button>
            </Link>
          <button className="acc">Create Account</button>
        </div>
        <button onClick={() => menu()} className="menu">
          <Icon
            path={mdiMenu}
            title="menu"
            size={1.5}
            color="#deeee5"
            className="imenu"
          />
        </button>
      </div>
      <div className="body">
        <div className="big-text">
          <h1>
            Connect With Wholesalers,
            <br />
            Retailers & Consumers Of
            <br />
            LPG around you
          </h1>
        </div>
        <div className="small-text">
          Locate a gas shop/station nearby from the comfort of
          <br /> your home and get your gas delivered to your doorstep
        </div>
        <div className="search">
          <input type="text" placeholder="Search Location, Gas Station" />{" "}
          <button>
            <Icon
              path={mdiMagnify}
              title="menu"
              size={1}
              color="#fff"
              className="isearch"
            />
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
