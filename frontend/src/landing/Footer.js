import "./Footer.css";
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-body">
        <div className="logo">
          <img width="80px" src={logo} alt="" />
          <p>
            22 Transon and Structural House,
            <br /> Victoria Island Lagos
            <br />
            contact@gas&me.com
            <br />
            07090003000
          </p>
          <p>
            <span>
              <Icon
                path={mdiFacebook}
                title="menu"
                size={1}
                color="#fff"
                className="imenu"
              />
            </span>
            <span>
              <Icon
                path={mdiTwitter}
                title="menu"
                size={1}
                color="#fff"
                className="imenu"
              />
            </span>
            <span>
              <Icon
                path={mdiInstagram}
                title="menu"
                size={1}
                color="#fff"
                className="imenu"
              />
            </span>
          </p>
        </div>
        <div className="company">
          <h3>COMPANY</h3>
          <span>Services</span>
          <span>About Us</span>
          <span>Contact Us</span>
        </div>
        <div className="info">
          <h3>INFO</h3>
          <span>Terms of Services</span>
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="ff">
        <span>c 2021. Gas & Me. All Rights Reserved.</span>
      </div>
    </div>
  );
}
