import "./Banner.css";
import banner from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiMenu, mdiMagnify, mdiClose } from "@mdi/js";
import { useState } from "react";

export default function Banner() {
  const [show, setShow] = useState("-205px");
  const dropDown = (val) => {
    setShow(val);
  };
  return (
    <div className="banner">
      <div className="new-menu" style={{ transform: `translatey(${show})` }}>
        <ul className="new-nav">
          <li>
            {" "}
            <a href="#aboutus">About us</a>
          </li>
          <li>
            <a href="#serv-ices">Services</a>
          </li>
          <li>
            <a href="#contactus">Contact Us</a>
          </li>
          <li>
            <Link to="/gasme-fe-pjt-3/login">Login</Link>
          </li>
          <li style={{ borderBottom: "0px" }}>
            <Link to="/gasme-fe-pjt-3/create-account">Create Account</Link>
          </li>
        </ul>
        <button onClick={() => dropDown("-205px")} className="menu">
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
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#serv-ices">Services </a>
          </li>
          <li>
            <a href="#contactus">Contact Us </a>
          </li>
        </nav>
        <div className="buttons">
          <Link className="login-link" to="/gasme-fe-pjt-3/login">
            <button className="login">Login</button>
          </Link>
          <Link to="/gasme-fe-pjt-3/create-account">
            <button className="acc">Create Account</button>
          </Link>
        </div>
        <button onClick={() => dropDown("0px")} className="menu">
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
