import React, {useState} from "react";
import Status from 'react-multiselect-checkboxes';
 

import logo from '../../img/Group 23.png';
import profile from "../../img/dp.jpeg";

import './cd.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Cdheader(props) {
  
  const options = [
    { label: 'Rating', value: 1},
    { label: 'Distance', value: 2},
    { label: 'Opening Hour', value: 3},
    { label: 'Home Delivery', value: 4},

  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'rgb(79, 194, 123)' : 'rgb(79, 194, 194)',
      padding: 10,
    }),
    control: () => ({
      display: "none"
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 700ms';
  
      return { ...provided, opacity, transition };
    }
  }

const [data, setData] = useState([])

 function getCustomerName() {
   
   fetch("https://gas-and-me-api.herokuapp.com/user/60d9ac275cc71800157e166b")
   .then((res) => res.json())
   .then((json) => {
          console.log(json);
          setData(json)
   })
 }
 
 
 
 return (
   
   <header className="cd-header">
      <div className="cd-left">
        <div className="cd-logo">
          <img src={logo} alt="logo" />
        </div>  

        <div className="cd-greetings">
          <img src={profile} alt="profile" className="cd-profile-img" />
          <p>Hello,<strong id="seller-name">{JSON.stringify(data.fullName)} </strong> <br /> What do you want to do today?</p>
        </div>
      </div>

      <div className="cd-right">
        <nav>
        <FontAwesomeIcon icon="search" className="cd-search-icon" />
        <input type="text" name="search" className="cd-search active" placeholder="Search vendor, Gas Station or Service" />
        <button>Search</button>
        </nav>
        
        <div className="cd-status-div">
        
        <Status options={options} placeholderButtonLabel="Filter by Status" styles={customStyles}  />
         
        </div>
      </div>
      
{/* <button onClick={getCustomerName}>click</button> */}
    </header>

  )
}
export default Cdheader;