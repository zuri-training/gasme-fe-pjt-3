import React from "react";
import logo from '../../assets/img/Group 23.png';
import profile from "../../assets/img/dp.jpeg";

import './message.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Cmheader() {
    return(

        <header className="cn-header active">
        <div className="cm-left">
          <div className="cm-logo">
          <img src={logo} alt="logo" />
          </div>

          <div className="cm-greetings">
            <img src={profile} alt="profile" className="cm-profile-img" />
            <p>Hello,<strong> John Doe</strong> <br /> What do you want to do today?</p>
          </div>
        </div>

        </header>

    )
}
export default Cmheader;