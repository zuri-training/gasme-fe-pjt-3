import React from "react";
import "./icons/icons.js"
import { Link } from "react-router-dom";


import "./components/seller dashboard parts/sd.css"
import Header from "./components/seller dashboard parts/sdheader.js";
import Aside from "./components/seller dashboard parts/sdaside.js"
import Section from "./components/seller dashboard parts/sdsection.js"

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Sdash() {
  const [toggle, setToggle] = useState(false) ;
  const toggler = () => {

    console.log(29); 
    setToggle((prev) => !prev)
      
  };
    return (
      <>
  
        <body>
          <Header />
          <mainsd>
      <FontAwesomeIcon icon="bars" className="sd-hamburger" onClick={toggler}/>           
            <Aside ham={toggle ? "sd-aside" : "sd-new-aside"}/>
            
            <Section />
            
          </mainsd>          
  
        </body>
      </>
    );
  }

  export default Sdash;