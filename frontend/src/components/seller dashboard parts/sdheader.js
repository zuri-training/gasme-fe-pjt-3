import React from "react";
import Status from 'react-multiselect-checkboxes';
import logo from '../../assets/img/Group 23.png';
import profile from "../../assets/img/dp.jpeg";

import './sd.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function header() {
    const options = [
        { label: 'Completed Request', value: 1},
        { label: 'New Request', value: 2},
        { label: 'Pending Request', value: 3},
        { label: 'Close-by Request', value: 4},

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
          const transition = 'opacity 300ms';
      
          return { ...provided, opacity, transition };
        }
      }
      
      

    return (

        <header className="sd-header active">
            <div className="sd-left">
                <div className="sd-logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="sd-greetings">
                    <img src={profile} alt="profile" className="sd-profile-img" />
                    <p>Hello,<strong> Lite Gas</strong> <br /> Sell to customers today!</p>
                </div>
            </div>

            <div className="sd-right">
          
            <Status options={options} placeholderButtonLabel="Filter by Status" styles={customStyles}   />
           
             </div>
        </header>

    )
}

export default header;