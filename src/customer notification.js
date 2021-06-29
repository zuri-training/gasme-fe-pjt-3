import React from "react";

import Header from "./components/customer notification parts/cnheader.js";
import Aside from "./components/customer notification parts/cnaside.js"
import Section from "./components/customer notification parts/cnsection.js"
import "./components/customer notification parts/cn.css"
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CNot() {
  
  const [toggle, setToggle] = useState(false) ;
  const toggler = () => {

    console.log(29); 
    setToggle((prev) => !prev)
      
  };
  return (
    <>
    <body>

      <Header />
      <maincn>
      <FontAwesomeIcon icon="bars" className="cn-hamburger" onClick={toggler}/>           

        <Aside ham={toggle ? "cn-aside" : "cn-new-aside"}/>
        <Section/>

      </maincn>
    </body>
  </>
  );
}

export default CNot;
