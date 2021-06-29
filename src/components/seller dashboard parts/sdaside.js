import React from "react";
import './sd.css';
import {Link} from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function aside(props) {
    return (

        <aside className={props.ham}>

            <div className="sd-menu-bar">
                
                <a href="/" className="sd-menu active" >
                    <FontAwesomeIcon icon="layer-group" className="icon" />
                    Customer's Orders
                </a>
                <a href="/" className="sd-menu" >
                    <FontAwesomeIcon icon="shopping-cart" className="icon" />

                    My Orders
                </a>
                <a href="/" className="sd-menu" >
                    <FontAwesomeIcon icon="comment" className="icon" />

                    Messages
                </a>

                <a href="/" className="sd-menu" >
                    <FontAwesomeIcon icon="bell" className="icon" />

                    Notifications
                </a>
                <Link to="/seller settings" className="sd-menu" >                
                    <FontAwesomeIcon icon="cog" className="icon" />

                    Settings
                </Link>

            </div>
            <div className="sd-logout">

                <a href="#" className="sd-log-menu">
                    <FontAwesomeIcon icon="sign-out-alt" className="icon" />
                    Log Out
                </a>
            </div>
            
        </aside>

    )
}

export default aside;