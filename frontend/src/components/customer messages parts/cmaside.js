import React from "react";
import {Link} from "react-router-dom"

import './message.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Cmaside(props) {
    return (
        <aside className={props.ham}>
            
            <div className="cm-menu-bar">
            <Link to="/gasme-fe-pjt-3/customer-dashboard" className="cm-menu">
                    <FontAwesomeIcon icon="home" className="icon" />
                    Home
                </Link>
                <a href="../../seller " className="cm-menu" >
                    <FontAwesomeIcon icon="shopping-cart" className="icon" />

                    Order History
                </a><a href="#" className="cm-menu active" >
                    <FontAwesomeIcon icon="comment" className="icon" />

                    Messages
                </a><a href="#" className="cm-menu" >
                    <FontAwesomeIcon icon="bell" className="icon" />

                    Notifications
                </a><a href="#" className="cm-menu" >
                    <FontAwesomeIcon icon="cog" className="icon" />

                    Settings
                </a>
                <a href="#" className="cm-menu" >
                    <FontAwesomeIcon icon="exchange-alt" className="icon" />

                    Become a Seller
                </a>

            </div>
            <div className="cm-logout">

                <a href="#" className="cm-log-menu">
                    <FontAwesomeIcon icon="sign-out-alt" className="icon" />
                    Log Out
                </a>
            </div>
        </aside>

    )
}
export default Cmaside;