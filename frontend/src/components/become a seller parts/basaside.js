import React from "react";
import {Link} from "react-router-dom"

import './bas.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Basaside(props) {
    return (
        <aside className={props.ham}>
            
            <div className="bas-menu-bar">
            <Link to="/gasme-fe-pjt-3/customer-dashboard" className="bas-menu">
                    <FontAwesomeIcon icon="home" className="icon" />
                    Home
                </Link>
                <a href="../../seller " className="bas-menu" >
                    <FontAwesomeIcon icon="shopping-cart" className="icon" />

                    Order History
                </a><a href="#" className="bas-menu" >
                    <FontAwesomeIcon icon="comment" className="icon" />

                    Messages
                </a><a href="#" className="bas-menu" >
                    <FontAwesomeIcon icon="bell" className="icon" />

                    Notifications
                </a><a href="#" className="bas-menu" >
                    <FontAwesomeIcon icon="cog" className="icon" />

                    Settings
                </a>
                <a href="#" className="bas-menu active" >
                    <FontAwesomeIcon icon="exchange-alt" className="icon" />

                    Become a Seller
                </a>

            </div>
            <div className="bas-logout">

                <a href="#" className="bas-log-menu">
                    <FontAwesomeIcon icon="sign-out-alt" className="icon" />
                    Log Out
                </a>
            </div>
        </aside>

    )
}
export default Basaside;