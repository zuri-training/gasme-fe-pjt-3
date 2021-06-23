import Icon from "@mdi/react";
import {
  mdiFacebook,
  mdiTwitter,
  mdiInstagram,
  mdiEyeSettingsOutline,
  mdiArrowRightCircle,
  mdiMenu,
  mdiClose,
} from "@mdi/js";
import "./Login.css";
import logo from "../assets/logogreen.png";
import { useState } from "react";

export default function Login() {
  const [show, setShow] = useState("-165px");
  const dropDown = (val) => {
    setShow(val);
  };

  return (
    <div className="login-container">
      <div className="slide-menu" style={{ transform: `translatey(${show})` }}>
        <div className="menu-items">
          <ul>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact us</a>
            </li>
            <li style={{ borderBottom: "0px" }}>
              <a href="/">Create Account</a>
            </li>
          </ul>
        </div>
        <div className="close-icon" onClick={() => dropDown("-165px")}>
          <Icon
            path={mdiClose}
            title="menu"
            size={1.3}
            color="#deeee5"
            className="imenu"
          />
        </div>
      </div>
      <div className="top">
        <div className="logo">
          <img src={logo} width="70px" alt="" />
        </div>
        <div className="nav">
          <ul>
            <li>
              <a href="/"> About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
          <button>Create Account</button>
        </div>
        <div className="hamburger-icon" onClick={() => dropDown("0px")}>
          {" "}
          {/*why*/}
          <Icon
            path={mdiMenu}
            title="menu"
            size={1.5}
            color="#fff"
            className="imenu"
          />
        </div>
      </div>
      <div className="body">
        <form>
          <div className="title">
            <p>Log in</p>
            <h1>Consumer's Account</h1>
            <p id="welcome">
              <span className="mark">Welcome back!</span> Log in to access your
              account
            </p>
          </div>
          <div className="main">
            <div className="name">
              <input type="text" placeholder="Username" />
            </div>
            <div className="pass">
              <div className="in-pass">
                <input type="password" placeholder="Password" />
                <span>
                  <Icon
                    path={mdiEyeSettingsOutline}
                    title="facebook"
                    size={1}
                    color="#717171"
                  />
                </span>
              </div>
              <p id="forget">
                Forgot Password? <span className="mark">Reset</span>
              </p>
            </div>
            <div className="continue">
              <button>
                Continue{" "}
                <Icon
                  path={mdiArrowRightCircle}
                  title="facebook"
                  size={1}
                  color="#fff"
                  className="cont-icon"
                />
              </button>
            </div>
            <div className="google">
              <button>
                {" "}
                <img style={{marginRight:"5px"}}
                  src="https://img.icons8.com/color/24/000000/google-logo.png"
                  alt=""
                />{" "}
                <span>Continue with Google</span>
              </button>
            </div>
          </div>
          <div className="footer">
            <p>
              Don't have an account? <span className="mark">Sign up now</span>
            </p>
            <ul>
              <li>
                <Icon
                  path={mdiFacebook}
                  title="facebook"
                  size={1}
                  color="#717171"
                />
              </li>
              <li>
                {" "}
                <Icon
                  path={mdiTwitter}
                  title="twitter"
                  size={1}
                  color="#717171"
                />
              </li>
              <li>
                <Icon
                  path={mdiInstagram}
                  title="instagram"
                  size={1}
                  color="#717171"
                />
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
}
