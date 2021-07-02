import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../assets/url/baseurl"; 

import './App.css';



function Section() {
   const [ email, setEmail ] = useState([])
   const [ vendorName, setVendorName ] = useState([])
   const [ status, setStatus ] = useState([])
  const [ address, setVendorAddress ] = useState([])
  const [ quantity, setQuantity ] = useState([])

    useEffect(() => {
    fetch(baseUrl + `/vendor/${id}`,  {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: {id}
      })
    })
      .then((res) => {
    if(res.ok) {
        console.log("Successful");
        res.json()
      } else {
        console.log("Not Successful");
      }})
      .then((data) => {
        console.log(data);
        setVendorName(data.data.vendor.fullName)
    setEmail(data.data.vendor.email)
        setVendorAddress(data.data.vendor.location)
        setStatus(data.data.vendor.status)

      })
      .catch(err =>{
        console.log(err)
        return "error!"
      }
      )}, [])

    const updateVendorName = (e) => {
        setVendorNAme(e.target.value)
    }

    const updateVendorEmail = (e) => {
        setEmail(e.target.value)
    }
    const updateVendorAddress = (e) => {
        setVendorAddress(e.target.value)
    }
    const  updateQuantity = (e) => {
        setQuantity(e.target.value)
    }
    return(
        
        
            
            <div className="ss-section">

            <h2>Business Settings</h2>
            <div className="forms">

            <form action="submit" className="left-field" >
                <label htmlFor="name">
                    Business Name <br />
                    <input type="text" name="name" placeholder="Name" value={vendorName} onChange={updateVendorName}/>
                </label>
                <label htmlFor="name">
                    Email <br />
                    <input type="email" name="email" placeholder="Email" value={email} onChange={updateVendorEmail}/>
                </label>
                <label htmlFor="name">
                    Address <br />
                    <input type="text" name="address" placeholder="Address" value={address} onChange={updateVendorAddress} />
                </label>
                <label htmlFor="name">
                    Status <br />
                    <input type="text" name="status" placeholder="Status" value={status} />
                </label>
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
                    <input type="text" name="status" placeholder="Status" />
                </label>
                
            </form>
            <form action="post" className="right-field">
                <label htmlFor="quantity">
                    Gas Quantity Available <br />
                    <input type="number" name="quantity" value={quantity} onChange={updateQuantity} />

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
export default Section;