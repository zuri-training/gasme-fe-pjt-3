import React from "react";

import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Aside(props) {
    return (
        <aside className={props.ham}>
            <div className="setting-head">

                <FontAwesomeIcon icon="cog" className="icon" />
                <h1>
                    Settings
                </h1>

            </div>
            <div className="ss-menu-bar">
                <a href="#" className="ss-menu active" >
                    <FontAwesomeIcon icon="pen" className="icon" />
                    Business Settings
                </a>

                <a href="#" className="ss-menu" >
                    <FontAwesomeIcon icon="bell" className="icon" />

                    Notifications
                </a>

                <a href="#" className="ss-menu" >
                    <FontAwesomeIcon icon="eye-slash" className="icon" />

                    Password
                </a>
                <a href="#" className="ss-menu" >
                    <FontAwesomeIcon icon="mask" className="icon" />

                    Privacy & Security
                </a>

                <a href="#" className="ss-menu" >
                    <FontAwesomeIcon icon="question-circle" className="icon" />

                    Help
                </a>

            </div>

        </aside>
    )
}
export default Aside;