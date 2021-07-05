import React from "react";

import Header from "./components/become a seller parts/basheader.js";
import Aside from "./components/become a seller parts/basaside.js"
import Section from "./components/become a seller parts/bassection.js"
import "./components/become a seller parts/bas.css"
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Bas() {
  
  const [toggle, setToggle] = useState(false) ;
  const toggler = () => {

    console.log(29); 
    setToggle((prev) => !prev)
      
  };
  return (
    <>
    <body>

      <Header />
      <mainbas>
      <FontAwesomeIcon icon="bars" className="bas-hamburger" onClick={toggler}/>           

        <Aside ham={toggle ? "bas-aside" : "bas-new-aside"}/>
        <Section/>

      </mainbas>
    </body>
  </>
  );
}

export default Bas;
