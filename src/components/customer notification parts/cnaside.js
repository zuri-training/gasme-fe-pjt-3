import React from "react";
import {Link} from "react-router-dom"

import './cn.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function cnaside(props) {
    return (
        <aside className={props.ham}>
            
            <div className="cn-menu-bar">
            <Link to="/customer dashboard" className="cn-menu">
                    <FontAwesomeIcon icon="home" className="icon" />
                    Home
                </Link>
                <a href="../../seller " className="cn-menu" >
                    <FontAwesomeIcon icon="shopping-cart" className="icon" />

                    Order History
                </a><a href="#" className="cn-menu" >
                    <FontAwesomeIcon icon="comment" className="icon" />

                    Messages
                </a><a href="#" className="cn-menu active" >
                    <FontAwesomeIcon icon="bell" className="icon" />

                    Notifications
                </a><a href="#" className="cn-menu" >
                    <FontAwesomeIcon icon="cog" className="icon" />

                    Settings
                </a>
                <a href="#" className="cn-menu" >
                    <FontAwesomeIcon icon="exchange-alt" className="icon" />

                    Become a Seller
                </a>

            </div>
            <div className="cn-logout">

                <a href="#" className="cn-log-menu">
                    <FontAwesomeIcon icon="sign-out-alt" className="icon" />
                    Log Out
                </a>
            </div>
        </aside>

    )
}
export default cnaside;