import React from "react";

import './bas.css';


import "../../icons/icons.js"

function Bassection() {
    return (
        <div className="bas-section">
            <div className="form">

            <label htmlFor="vendor-name">
                Business Name  <br/>
            <input type="text" className="vendor-name" placeholder="Business name" />
            </label>
            <label htmlFor="volume" className="range">
                Volume-Range <br />
                <input type="text" className="volume" placeholder="Minimum"/> to <input type="text" className="volume" placeholder="Maximum"/>
            </label>
            <label htmlFor="address">
                Address <br/>
                <input type="text" name="address" placeholder="Address"/>
            </label>
            <label htmlFor="number">
                Telephone Number <br />
                <input type="tel" name="number" placeholder="Telephone Number"/>
            </label>
            <label htmlFor="price">
                Price per Kg (#)<br/>
                <input type="number" name="price" placeholder="Price"/>
            </label>
            <button type="submit" className="bas-btn">Become a Seller</button>
            </div>
        </div>
    )
}
export default Bassection;