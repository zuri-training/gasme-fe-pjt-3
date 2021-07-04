import React from "react";
import logo from '../../assets/img/Group 23.png';
import profile from "../../assets/img/dp.jpeg";

import './bas.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Basheader() {
    return(

        <header className="bas-header active">
        <div className="bas-left">
          <div className="bas-logo">
          <img src={logo} alt="logo" />
          </div>

          <div className="bas-greetings">
            <img src={profile} alt="profile" className="bas-profile-img" />
            <p>Hello,<strong> John Doe</strong> <br /> What do you want to do today?</p>
          </div>
        </div>

        </header>

    )
}
export default Basheader;