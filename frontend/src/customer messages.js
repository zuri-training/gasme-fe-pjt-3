import React from "react";

import Header from "./components/customer messages parts/cmheader.js";
import Aside from "./components/customer messages parts/cmaside.js"
import Section from "./components/customer messages parts/cmsection.js"
import "./components/customer messages parts/message.css"
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Cmessages() {
  
  const [toggle, setToggle] = useState(false) ;
  const toggler = () => {

    console.log(29); 
    setToggle((prev) => !prev)
      
  };
  return (
    <>
    <body>

      <Header />
      <maincm>
      <FontAwesomeIcon icon="bars" className="cm-hamburger" onClick={toggler}/>           

        <Aside ham={toggle ? "cm-aside" : "cm-new-aside"}/>
        <Section/>

      </maincm>
    </body>
  </>
  );
}

export default Cmessages;
