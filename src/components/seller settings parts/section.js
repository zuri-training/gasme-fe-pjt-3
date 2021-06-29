import React from "react";

import './App.css';



function section() {

    return(
        
        
            
            <div className="ss-section">

            <h2>Business Settings</h2>
            <div className="forms">

            <form action="submit" className="left-field" >
                <label htmlFor="name">
                    Business Name <br />
                    <input type="text" name="name" placeholder="Name" />
                </label>
                <label htmlFor="name">
                    Email <br />
                    <input type="email" name="email" placeholder="Email" />
                </label>
                <label htmlFor="name">
                    Address <br />
                    <input type="text" name="address" placeholder="Address" />
                </label>
                <label htmlFor="name">
                    Status <br />
                    <input type="text" name="status" placeholder="Status"/>
                </label>
                
            </form>
            <form action="post" className="right-field">
                <label htmlFor="quantity">
                    Gas Quantity Available <br />
                    <input type="number" name="quantity" />
                </label>
                <label htmlFor="price-list" className="price-list">
                   Gas Price List <br />
                  <ul>
                      <li>3kg &gt; #1500</li>
                      <li>6kg &gt; #3000</li>
                      <li>12kg &gt; #6000</li>
                      <li>50kg &gt; #25000</li>
                      <li>100kg &gt; #50000</li>

                  </ul>

                </label>
            </form>
            </div>
            </div>
    )
}
export default section;