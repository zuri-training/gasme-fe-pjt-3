import React from "react";
import logo from '../../assets/img/Group 23.png';
import profile from "../../assets/img/dp.jpeg";

import './App.css';

function header() {
    return (
        <header className="ss-header">
            <img src={logo} alt="logo" className="ss-logo-settings" />
            <img src={profile} alt="profile" className="ss-profile-settings" />
        </header>
    )
}
export default header;