import React from "react";
import seller1 from "./img/download 2.png"
import seller2 from "./img/Rectangle 23 1.png"
import seller3 from "./img/download 2.png"
import seller4 from "./img/istockphoto-1199749863-612x612 1.png"
import seller5 from "./img/Rectangle 24.png"
import seller6 from "./img/download 2.png"

import Header from "./components/customer dashboard parts/cdheader.js";
import Aside from "./components/customer dashboard parts/cdaside.js"
import Section from "./components/customer dashboard parts/cdsection.js"
import "./components/customer dashboard parts/cd.css"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Customer() {
  const consumerName = "David Efetobor"
  const img = [seller1, seller2, seller3, seller4, seller5, seller6]
   
  const [toggle, setToggle] = useState(false) ;
  const toggler = () => {

    console.log(29); 
    setToggle((prev) => !prev)
      
  };
  return (

    <body>

      <Header name={consumerName}/>
      <maincd>
      <FontAwesomeIcon icon="bars" className="cd-hamburger" onClick={toggler}/>           

        <Aside ham={toggle ? "cd-aside" : "cd-new-aside"}/>
        <Section img={img} />

      </maincd>
    </body>
  
  );
}

export default Customer;
