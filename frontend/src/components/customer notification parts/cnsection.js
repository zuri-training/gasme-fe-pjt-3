import React from "react";
import profile from "../../assets/img/dp.jpeg";

import "../../icons/icons.js"

function cnsection() {
    return(
        <div className="cn-section">

        <h1>NOTIFICATIONS</h1>
        <nav className="notification">
            <img src={profile} alt="profile" />
            <div className="not-details">
                <h3>
                    The Gas Shop
                </h3>
                <p>
                    Delivery takes about 15 minutes. Traffic can make it longer.
                    <br />

                    <span>June 17th, 2021. 9:00 AM</span>
                </p>
                
            </div>
        </nav>
        <nav className="notification">
            <img src={profile} alt="profile" />
            <div className="not-details">
                <h3>
                    The Gas Shop
                </h3>
                <p>
                    Delivery takes about 15 minutes. Traffic can make it longer.
                    <br />

                    <span>June 17th, 2021. 9:00 AM</span>
                </p>
                
            </div>
        </nav>

        </div>
    ) 
}
export default cnsection;