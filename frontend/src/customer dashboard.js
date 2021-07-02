import React, { useEffect, useState } from "react";
import { baseUrl } from "./assets/url/baseurl";

import seller1 from "./assets/img/download 2.png"
import seller2 from "./assets/img/Rectangle 23 1.png"
import seller3 from "./assets/img/download 2.png"
import seller4 from "./assets/img/istockphoto-1199749863-612x612 1.png"
import seller5 from "./assets/img/Rectangle 24.png"
import seller6 from "./assets/img/download 2.png"

import Header from "./components/customer dashboard parts/cdheader.js";
import Aside from "./components/customer dashboard parts/cdaside.js"
import Section from "./components/customer dashboard parts/cdsection.js"
import "./components/customer dashboard parts/cd.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useParams } from "react-router-dom";

function Customer() {
  const [ id, setId ] = useState("")
  // const { id } = useParams()
  const [consumerName, setConsumerName] = useState([])

  useEffect(() => {
    fetch(baseUrl + `/user/${id}`, {
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
        }
      })
      .then((data) => {
        console.log(data);
        // setId(data.data.user.id)
        setConsumerName(data.data.user.fullName)
      })
      .catch(err =>{
        console.log(err)
      }
      )}
  , [id])
  const cName = JSON.stringify(consumerName).replace(/['"]+/g, '').toUpperCase();

  const img = [seller1, seller2, seller3, seller4, seller5, seller6]
  const [toggle, setToggle] = useState(false);
  const toggler = () => {

    setToggle((prev) => !prev)

  };
  return (

    <body>

      <Header name={cName} />
      <maincd>
        <FontAwesomeIcon icon="bars" className="cd-hamburger" onClick={toggler} />

        <Aside ham={toggle ? "cd-aside" : "cd-new-aside"} />
        <Section img={img}  />

      </maincd>
    </body>

  );
}

export default Customer;
