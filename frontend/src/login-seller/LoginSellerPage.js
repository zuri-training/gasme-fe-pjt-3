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
import "../login/Login.css";
import logo from "../assets/img/logogreen.png";
import { Link } from "react-router-dom";
import { useCallback, useContext, useEffect, useState } from "react";
import { context } from "../assets/environ/context";

export default function LoginSellerPage({ responseData }) {
  const { postLoginSellerData } = useContext(context);
  const [response, setResponse] = useState({});
  const [show, setShow] = useState("-165px");
  const [data, setData] = useState({ email: null, password: null });
  const dropDown = (val) => {
    setShow(val);
  };
  const setValues = useCallback(
    (e) => {
      const elem = e.target.name;
      data[elem] = e.target.value;
      setResponse((response) => ({ errorMsg: "" }));
    },
    [data]
  );

  useEffect(() => {
    setResponse(responseData);
  }, [responseData]);

  const feValidation = useCallback(() => {
    let status = true;
    if (
      data.email == null ||
      data.email.trim().length < 1 ||
      data.password == null ||
      data.password.trim().length < 6
    ) {
      status = false;
      setResponse((response) => ({
        ...response,
        errorMsg: "Incorrect email and password",
      }));
    }

    return status;
  }, [data.email, data.password]);

  const sendData = useCallback(
    (e) => {
      e.preventDefault();
      setData(data);
      if (feValidation()) {
        postLoginSellerData(data);
      }
    },
    [data, feValidation, postLoginSellerData]
  );

  return (
    <div className="login-container">
      <div className="slide-menu" style={{ transform: `translatey(${show})` }}>
        <div className="menu-items">
          <ul>
            <li>
            <Link to="/gasme-fe-pjt-3/">About us</Link>
            </li>
            <li>
            <Link to="/gasme-fe-pjt-3/">Services</Link>
            </li>
            <li>
            <Link to="/gasme-fe-pjt-3/">Contact us</Link>
            </li>
            <li style={{ borderBottom: "0px" }}>
            <Link to="/gasme-fe-pjt-3/create-account">Create Account</Link>
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
              <Link to="/gasme-fe-pjt-3/#aboutus" >About Us</Link> 
            </li>
            <li>
            <Link to="/gasme-fe-pjt-3/#serv-ices">Services</Link>
            </li>
            <li>
            <Link to="/gasme-fe-pjt-3/#contactus">Contact Us</Link>
            </li>
          </ul>
          <Link to="/gasme-fe-pjt-3/create-account">
            <button>Create Account</button>
          </Link>
        </div>
        <div className="hamburger-icon" onClick={() => dropDown("0px")}>
          {" "}
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
            <h1>Seller's Account</h1>
            <p id="welcome">
              <span id="login-welcome" className="mark">Welcome back!</span> Log in to access your
              account
            </p>
          </div>
          <div className="main">
            <span className="invalid-input">{response.errorMsg}</span>
            <div className="name">
              <input
                type="text"
                placeholder="Email"
                name="email"
                onChange={setValues}
              />
            </div>
            <div className="pass">
              <div className="in-pass">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={setValues}
                />
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
              <button onClick={sendData}>
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
                <img
                  style={{ marginRight: "5px" }}
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
