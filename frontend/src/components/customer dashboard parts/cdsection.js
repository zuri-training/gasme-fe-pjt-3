import React, { useState, useEffect } from "react";
import "../../icons/icons.js"
import { baseUrl } from "../../assets/url/baseurl";

import './cd.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SellerSetting from "../../seller setting.js";
import { useParams } from "react-router-dom";

function Cdsection(props) {
  const [ id, setId ] = useState("")
  const [vendorName, setVendorrName] = useState({})
  const [ address, setVendorAddress ] = useState([])
   const [ image, setImage ] = useState([])
   const [ sellers, setSellers ] = useState([])

  useEffect(() => {
    fetch(baseUrl + `/vendor/${id}`,  {
      method: "GET",
      headers: {
      "Accept": "application/json, text/plain */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: id
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
        setId(data.data.vendor.id)
   setImage(data.data.vendor.imageUrl)
        setVendorName(data.data.vendor.vendorName)
        setVendorAddress(data.data.vendor.location)
           setSellers(data.data.vendor)
      })
      .catch(err =>{
        console.log(err)
      }
      )}
  , [])

   const sName = JSON.stringify(vendorName).replace(/['"]+/g, '').toUpperCase();
   const addr = JSON.stringify(vendorAddress).replace(/['"]+/g, '');
  return (
    <section className="cd-section">
      <nav className="home-nav">
        Buy Gas
      </nav>

      <div className="seller-list">
       {sellers.map(seller => {
        return <div className="sellers">
        <img src={imageUrl} alt="Seller" />
        <p>
          <h3>{sName}</h3>
          <i>
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
          </i>
        </p>
        {addr}
        <span>
          <small> Minimum Order:</small>100kg <b> #400/kg</b>
        </span>

      </div>

      })} 

        <div className="sellers">
          <img src={props.img[0]} alt="Seller" />
          <p>
            <h3>The Gas Shop</h3>
            <i>
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </i>
          </p>
          
          Ajanlekoko Street, Surulere,

          <span>
            <small> Minimum Order:</small>100kg <b> #400/kg</b>
          </span>

        </div>

        <div className="sellers">
          <img src={props.img[1]} alt="Seller" />
          <p>

            <h3>Shell Gas Station</h3>
            <i>
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </i>
          </p>
          George Street, Surulere, Lagos
          <span>
            <small> Minimum Order:</small>100kg <b> #400/kg</b>
          </span>
        </div><div className="sellers">
          <img src={props.img[2]} alt="Seller" />
          <p>

            <h3>The Gas Shop</h3>
            <i>
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </i>
          </p>
          Ajanlekoko Street, Surulere, Lagos
          <span>
            <small> Minimum Order:</small>100kg <b> #400/kg</b>
          </span>
        </div><div className="sellers">
          <img src={props.img[3]} alt="Seller" />
          <p>

            <h3>Bestman Gas Plant</h3>
            <i>
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </i>
          </p>
          5, Linda Street, Surulere, Lagos
          <span>
            <small> Minimum Order:</small>100kg <b> #400/kg</b>
          </span>
        </div><div className="sellers">
          <img src={props.img[4]} alt="Seller" />
          <p>

            <h3>Shell Gas Station</h3>
            <i>
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </i>
          </p>
          George Street, Surulere, Lagos
          <span>
            <small> Minimum Order:</small>100kg <b> #400/kg</b>
          </span>
        </div><div className="sellers">
          <img src={props.img[5]} alt="Seller" />
          <p>

            <h3>The Gas Shop</h3>
            <i>
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
              <FontAwesomeIcon icon="star" />
            </i>
          </p>
          Ajanlekoko Street, Surulere, Lagos
          <span>
            <small> Minimum Order:</small>100kg <b> #400/kg</b>
          </span>
        </div>

      </div>
    </section>

  )
}
export default Cdsection;