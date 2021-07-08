import "./ConsumerDashboard.css";
import logo from "../assets/img/logogreen.png";
import altimg from "../assets/img/altImg.jpg";
import Icon from "@mdi/react";
import ConsumerHome from "./consumer-home/ConsumerHome";
import CustomerSetting from "./customer-setting/CustomerSetting";
import CustomerMessage from "./customer-message/CustomerMessage";
import CustomerNotification from "./customer-notification/CustomerNotification";
import BecomeSeller from "./become-seller/BecomeSeller";
import { Redirect } from "react-router-dom";
import {
  mdiAbacus,
  mdiHomeOutline,
  mdiCartOutline,
  mdiMessageSettingsOutline,
  mdiBellOutline,
  mdiCogOutline,
  mdiStoreOutline,
  mdiLogoutVariant,
  mdiClose,
  mdiStarSettings,
  mdiWeightKilogram,
  mdiMapMarkerRadius,
  mdiBriefcaseClock,
  mdiTruckDelivery,
  mdiChevronDown,
} from "@mdi/js";
import { useCallback, useEffect, useState } from "react";

export default function ConsumerDashboard() {
  const localData = JSON.parse(localStorage.getItem("login"));

  const [show, setShow] = useState("305px");
  const [dropMenuHeight, setDropMenu] = useState(false);
  const [pageTitle, setPageTitle] = useState("home");
  const [mainContent, setMainContent] = useState(ConsumerHome);
  const [secured, setSecurity] = useState(true);
  const dropDown = (val) => {
    setShow(val);
  };

  const navigate = useCallback((e) => {
    setPageTitle(e.target.textContent);
    const pages = {
      Home: ConsumerHome,
      Settings: CustomerSetting,
      Notifications: CustomerNotification,
      Messages: CustomerMessage,
      "Become a seller": BecomeSeller,
      Logout: () => {
        localStorage.clear();
        setSecurity(false)
      },
    };
    setMainContent(pages[e.target.textContent]);
  }, []);

  const testo = () => {
    console.log(true);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        vendorId: "60d5c7cae34e280015efee29",
        rating: 4.5,
        body: "excellent service",
      }),
    };

    fetch("https://gas-and-me-api.herokuapp.com/vendor/review", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <>
   {secured ?  <div className="c-board">
      <div className="filter-side" style={{ transform: `translatex(${show})` }}>
        <div className="filter-top">
          <h3>FILTERS</h3>
          <button onClick={() => dropDown("305px")}>
            <Icon
              path={mdiClose}
              title="menu"
              size={1.3}
              color="#495259"
              className="imenu"
            />
          </button>
        </div>
        <div className="filter-body">
          <div className="ratings">
            <h3>
              <Icon
                path={mdiStarSettings}
                title="menu"
                size={1}
                className="filter-icons"
              />
              Ratings
            </h3>
            <div className="stars">
              <input id="five" type="checkbox" value="5 stars" />
              <label for="five">5 stars</label>
            </div>
            <div className="stars">
              <input id="four" type="checkbox" value="4 stars" />
              <label for="four">4 stars</label>
            </div>
            <div className="stars">
              <input id="three" type="checkbox" value="3 stars" />
              <label for="three">3 stars</label>
            </div>
            <div className="stars">
              <input id="two" type="checkbox" value="2 stars" />
              <label for="two">2 stars</label>
            </div>
            <div className="stars">
              <input id="one" type="checkbox" value="1 stars" />
              <label for="one">1 star</label>
            </div>
          </div>

          <div className="volume">
            <h3>
              <Icon
                path={mdiWeightKilogram}
                title="menu"
                size={1}
                className="filter-icons"
              />
              Volume
            </h3>
            <div className="vol">
              <input id="vol-five" type="checkbox" value="5 stars" />
              <label for="vol-five">less than 25kg</label>
            </div>
            <div className="vol">
              <input id="vol-four" type="checkbox" value="4 stars" />
              <label for="vol-four">25kg - 150kg</label>
            </div>
            <div className="vol">
              <input id="vol-three" type="checkbox" value="3 stars" />
              <label for="vol-three">150kg - 300kg</label>
            </div>
            <div className="vol">
              <input id="vol-two" type="checkbox" value="2 stars" />
              <label for="vol-two">300kg - 2000kg</label>
            </div>
            <div className="vol">
              <input id="vol-one" type="checkbox" value="1 stars" />
              <label for="vol-one">Greater than 2000kg</label>
            </div>
          </div>
          <div className="location">
            <h3>
              <Icon
                path={mdiMapMarkerRadius}
                title="menu"
                size={1}
                className="filter-icons"
              />
              Location
            </h3>
            <div className="cur-location">
              <input name="location" id="cur-lo" type="radio" />
              <label for="cur-lo"> Use current location</label>
            </div>
            <div className="search-location">
              <input name="location" id="cur-lo" type="radio" />
              <input
                id="cur-lo"
                for="cur-lo"
                placeholder="Search location"
                type="text"
              />
            </div>
          </div>
          <div className="open-hours">
            <h3>
              <Icon
                path={mdiBriefcaseClock}
                title="menu"
                size={1}
                className="filter-icons"
              />
              Opening Hours
            </h3>
            <div className="open-close">
              <div>
                Open : <input type="time" />
              </div>
              <div>
                Close : <input type="time" />
              </div>
            </div>
          </div>
          <div className="support-delivery">
            <h3>
              <Icon
                path={mdiTruckDelivery}
                title="menu"
                size={1}
                className="filter-icons"
              />
              Supports Delivery
            </h3>
            <div className="deliv">
              <input id="deliv" type="checkbox" />
              <label for="deliv">Delivery</label>
            </div>
          </div>
          <div className="apply-filters">
            <button>Apply</button>
          </div>
        </div>
      </div>
      <div className="wrap">
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="top-title">
            <h2>{pageTitle}</h2>
          </div>
          <div className="filter" onClick={() => dropDown("0px")}>
            <button>
              <Icon
                path={mdiAbacus}
                title="filter"
                size={0.8}
                color="#299445"
                className=""
              />
              Filters
            </button>
          </div>
        </div>
        <div className="dropMenu">
          <button onClick={() => setDropMenu(!dropMenuHeight)}>
            <Icon
              path={mdiChevronDown}
              title="filter"
              size={1}
              color="#fff"
              className=""
            />
          </button>
          <div
            className="drop-nav"
            style={{ height: dropMenuHeight ? "0px" : "210px" }}
          >
            <ul>
              <li onClick={navigate}>Home</li>
              <li onClick={navigate}>Order History</li>
              <li onClick={navigate}>Messages</li>
              <li onClick={navigate}>Notifications</li>
              <li onClick={navigate}>Settings</li>
              <li onClick={navigate}>Become a seller</li>
              <li onClick={navigate}>Logout</li>
            </ul>
          </div>
        </div>
        <div className="body">
          <aside>
            <div className="profile-pic">
              <div
                className="img-holder"
                style={{ backgroundImage: `url(${altimg})` }}
              ></div>
              <div className="user-intro">
                  <h3>{localData.data.token}</h3>
              </div>
            </div>
            <div className="sidenav">
              <ul>
                <li onClick={navigate}>
                  <Icon path={mdiHomeOutline} className="aside-icon" />
                  Home
                </li>
                <li onClick={navigate}>
                  <Icon path={mdiCartOutline} className="aside-icon" />
                  Order History
                </li>
                <li onClick={navigate}>
                  <Icon
                    path={mdiMessageSettingsOutline}
                    className="aside-icon"
                  />
                  Messages
                </li>
                <li onClick={navigate}>
                  <Icon path={mdiBellOutline} className="aside-icon" />
                  Notifications
                </li>
                <li onClick={navigate}>
                  <Icon path={mdiCogOutline} className="aside-icon" />
                  Settings
                </li>
                <li onClick={navigate}>
                  <Icon path={mdiStoreOutline} className="aside-icon" />
                  Become a seller
                </li>
                <li onClick={navigate}>
                  <Icon path={mdiLogoutVariant} className="aside-icon" />
                  Logout
                </li>
              </ul>
            </div>
          </aside>
          <section className="content">
            <div className="wrapper">{mainContent}</div>
          </section>
        </div>
      </div>
      </div> :
      <Redirect to={{ pathname: "/gasme-fe-pjt-3/login/customer" }} />}
      </>
  );
}
