import React from "react";
import {Link} from "react-router-dom"


import './cd.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Cdaside(props) {
    return (
        <aside className={props.ham} >
            <div className="cd-menu-bar">
                <a href="/" className="cd-menu active">
                    <FontAwesomeIcon icon="home" className="icon" />
                    Home
                </a>
                <a href="../../seller " className="cd-menu" >
                    <FontAwesomeIcon icon="shopping-cart" className="icon" />

                 Order History
                </a><a href="#" className="cd-menu" >
                    <FontAwesomeIcon icon="comment" className="icon" />

                    Messages
                </a>


                <Link to="/gasme-fe-pjt-3/customer-notification" className="cd-menu">

                    <FontAwesomeIcon icon="bell" className="icon" />

                    Notifications
                </Link>
                <a href="#" className="cd-menu" >
                    <FontAwesomeIcon icon="cog" className="icon" />

                    Settings
                </a>
                <a href="#" className="cn-menu" >
                    <FontAwesomeIcon icon="exchange-alt" className="icon" />

                    Become a Seller
                </a>

            </div>
            <div className="cd-logout">

                <a href="#" className="cd-log-menu">
                    <FontAwesomeIcon icon="sign-out-alt" className="icon" />
                    Log Out
                </a>
            </div>
        </aside>

    )
}
export default Cdaside;