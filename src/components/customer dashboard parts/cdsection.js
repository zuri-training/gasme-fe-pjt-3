import React from "react";
import "../../icons/icons.js"
// import seller1 from "../../img/download 2.png"
// import seller2 from "../../img/Rectangle 23 1.png"
// import seller3 from "../../img/download 2.png"
// import seller4 from "../../img/istockphoto-1199749863-612x612 1.png"
// import seller5 from "../../img/Rectangle 24.png"
// import seller6 from "../../img/download 2.png"
import './cd.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function cdsection(props) {

  return (
    <section className="cd-section">
      <nav className="home-nav">
       Buy Gas 
      </nav>

      <div className="seller-list">

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
         
          Ajanlekoko Street, Surulere, Lagos
         
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
export default cdsection;