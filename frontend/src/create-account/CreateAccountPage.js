import { useCallback, useContext, useEffect, useState } from "react";
import { context } from "../assets/environ/context";
import "./CreateAccount.css";
import Icon from "@mdi/react";
import { mdiEyeSettingsOutline } from "@mdi/js";
import logo from "../assets/img/logogreen.png";

export default function CreateAccountPage({ responseData }) {
  const { postNewAccData } = useContext(context);
  const [response, setResponse] = useState({});
  const [data, setData] = useState({
    fullName:null,
    email: null,
    password: null,
    phoneNumber: null,
  });

  const setValues = useCallback(
    (e) => {
      const elem = e.target.name;
      data[elem] = e.target.value;
      setResponse((response) => ({ ...response, [elem]: "" }));
    },
    [data]
  );

  useEffect(() => {
    setResponse(responseData);
  }, [responseData]);

  const feValidation = useCallback(() => {
    let status = true;
    if (data.fullName == null || data.fullName.trim().length < 1) {
      status = false;
      setResponse((response) => ({
        ...response,
        fullName: "Please type in a valid name.",
      }));
    }
    if (data.email == null || data.email.trim().length < 1) {
      status = false;
      setResponse((response) => ({
        ...response,
        email: "Please type in a valid email.",
      }));
    }
    if (data.password == null || data.password.trim().length < 6) {
      status = false;
      setResponse((response) => ({
        ...response,
        password: "Password must be at least six characters.",
      }));
    }
    // if (data.address == null || data.address.trim().length < 1) {
    //   status = false;
    //   setResponse((response) => ({
    //     ...response,
    //     address: "Please type in a valid address.",
    //   }));
    // }
    if (
      data.phoneNumber == null ||
      data.phoneNumber.trim().length < 1 ||
      isNaN(+data.phoneNumber)
    ) {
      status = false;
      setResponse((response) => ({
        ...response,
        phoneNumber: "Please type in a valid number.",
      }));
    }
    return status;
  }, [data.email, data.fullName, data.password, data.phoneNumber]);

  const sendData = useCallback(() => {
    setData(data);
    if (feValidation()) {
      postNewAccData(data);
    }
  }, [data, feValidation, postNewAccData]);

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
            <input
              type="text"
              name="fullName"
              onChange={setValues}
              placeholder="Full Name"
            />
            <span className="invalid-input">{response.fullName}</span>
          </div>
          {/* <div className="bus-name">
            <input
              type="text"
              name="businessName"
              onChange={setValues}
              placeholder="Business name"
            />
            <span className="mark">
              seller's Only <span>*</span>
            </span>
          </div> */}
          <div className="email">
            <input
              type="email"
              name="email"
              onChange={setValues}
              placeholder="Email"
            />
            <span className="invalid-input">{response.email}</span>
          </div>
          <div className="pass">
            <input
              type="password"
              name="password"
              onChange={setValues}
              placeholder="Password"
            />
            <span>
              <Icon
                path={mdiEyeSettingsOutline}
                title="facebook"
                size={1}
                color="#717171"
              />
            </span>
            <span className="invalid-input">{response.password}</span>
          </div>
          
          <div className="number">
            <input
              type="text"
              name="phoneNumber"
              onChange={setValues}
              placeholder="Mobile Number"
            />
            <span className="invalid-input">{response.phoneNumber}</span>
          </div>
          {/* <div className="address">
            <input
              type="text"
              name="address"
              onChange={setValues}
              placeholder="Address"
            />
            <span className="invalid-input">{response.address}</span>
          </div> */}
          <div className="terms">
            <input type="checkbox" name="acceptTerms" onChange={setValues} />
            <span>
              I agree to Gas & Me's{" "}
              <span className="mark">Terms of Services</span> and{" "}
              <span className="mark">Privacy Policy</span>
            </span>
          </div>
          <div className="create">
            <button onClick={sendData}>Create Account</button>
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
