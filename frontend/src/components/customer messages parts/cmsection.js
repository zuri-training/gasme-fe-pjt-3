import React from "react";
import profile from "../../assets/img/dp.jpeg";
import sellerProf from "../../assets/img/dp.jpeg";

import './message.css';


import "../../icons/icons.js"

function Cmsection() {
    return (
        <div className="cm-section">
            <div className="cside">
                <p className="message">
                    Hello there
                </p>
                <img src={profile} alt="profile" className="cm-message-img"/>

            </div>

            <div className="sside">
                <img src={sellerProf} alt="profile" className="cm-message-img"/>
                <p className="message">
                     How many kg do u need Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate in dolor necessitatibus?
                </p>

            </div>
            <div className="cside">
                <p className="message">
                     About 50kg
                </p>
                <img src={profile} alt="profile" className="cm-message-img"/>

            </div>



        </div>
    )
}
export default Cmsection;