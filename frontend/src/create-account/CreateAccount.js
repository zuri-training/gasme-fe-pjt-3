import "./CreateAccount.css";
import Icon from "@mdi/react";
import { mdiEyeSettingsOutline } from "@mdi/js";
import logo from "../assets/logogreen.png";

export default function CreateAccount() {
  return (
    <div className="create-acc-container">
      <div className="top">
        <img width="80px" src={logo} alt="" />
      </div>
      <div className="body">
        <div className="content">
          <div className="title">
            <h2>Create Account</h2>
          </div>
          <div className="name">
            <input type="text" placeholder="Username" />
          </div>
          <div className="bus-name">
            <input type="text" placeholder="Business name" />
            <span className="mark">
              seller's Only <span>*</span>
            </span>
          </div>
          <div className="pass">
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
          <div className="email">
            <input type="email" placeholder="Email" />
          </div>
          <div className="number">
            <input type="text" placeholder="Mobile Number" />
          </div>
          <div className="address">
            <input type="text" placeholder="Address" />
          </div>
          <div className="terms">
            <input type="checkbox" />
            <span>
              I agree to Gas & Me's{" "}
              <span className="mark">Terms of Services</span> and{" "}
              <span className="mark">Privacy Policy</span>
            </span>
          </div>
          <div className="create">
            <button>Create Account</button>
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
      </div>
    </div>
  );
}
