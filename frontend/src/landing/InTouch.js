import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";
import "./InTouch.css";

export default function InTouch() {
  return (
    <div className="intouch-wrapper">
      <div className="map">
        <div>
          <h1>Get In Touch</h1>
          <h3>Help us serve you better.</h3>
        </div>
      </div>
      <div className="form">
        <form>
          <h3>Send Us a Message</h3>
          <input placeholder="Your Name" type="text" />
          <input placeholder="Your Email" type="text" />
          <textarea placeholder="Your Message" />
          <input type="button" value="Send" />
        </form>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            <h3>Email</h3>
            <span>contact@gas&me.com</span>
          </p>
          <p>
            <h3>Phone Numbers</h3>
            <span>07090003000</span>
            <br />
            <span>09080002000</span>
          </p>
          <p>
            <h3>Address</h3>
            <span>
              22 Transon and Structural House,
              <br /> Victoria Island, Lagos
            </span>
          </p>
          <p>
            <span>
              <Icon
                path={mdiFacebook}
                title="menu"
                size={1.3}
                color="#fff"
                className="imenu"
              />
            </span>
            <span>
              <Icon
                path={mdiTwitter}
                title="menu"
                size={1.3}
                color="#fff"
                className="imenu"
              />
            </span>
            <span>
              <Icon
                path={mdiInstagram}
                title="menu"
                size={1.3}
                color="#fff"
                className="imenu"
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
