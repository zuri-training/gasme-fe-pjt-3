import React from "react";

import Header from "./components/seller settings parts/header.js";
import Aside from "./components/seller settings parts/aside.js"
import Section from "./components/seller settings parts/section.js"

import "./components/seller settings parts/App.css"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SellerSetting() {
   
  const [toggle, setToggle] = useState(false) ;
  const toggler = () => {

    console.log(29); 
    setToggle((prev) => !prev)
      
  };
  return (
    <>
    
    <body>

      <Header />
      <div className="ss-main">
      <FontAwesomeIcon icon="bars" className="ss-hamburger" onClick={toggler}/>           
        <Aside ham={toggle ? "ss-aside" : "ss-new-aside"}/>
        <Section />

      </div>
    </body>
    </>
  );
}

export default SellerSetting;
