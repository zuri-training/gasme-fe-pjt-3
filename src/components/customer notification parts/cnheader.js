import React from "react";
import logo from '../../img/Group 23.png';
import profile from "../../img/dp.jpeg";

import './cn.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function cnheader() {
    return(

        <header className="cn-header active">
        <div className="cn-left">
          <div className="cn-logo">
          <img src={logo} alt="logo" />
          </div>

          <div className="cn-greetings">
            <img src={profile} alt="profile" className="cn-profile-img" />
            <p>Hello,<strong> John Doe</strong> <br /> What do you want to do today?</p>
          </div>
        </div>

        </header>

    )
}
export default cnheader;