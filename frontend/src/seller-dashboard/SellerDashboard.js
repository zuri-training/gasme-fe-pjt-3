import "../seller-dashboard/SellerDashboard.css";
import logo from "../assets/img/logogreen.png";
import altimg from "../assets/img/altImg.jpg";
import Icon from "@mdi/react";
import {
  mdiAbacus,
  mdiHomeOutline,
  mdiCartOutline,
  mdiMessageSettingsOutline,
  mdiBellOutline,
  mdiCogOutline,
  mdiLogoutVariant,
  mdiClose,
  mdiStarSettings,
  mdiChevronDown,
} from "@mdi/js";
import { useCallback, useState } from "react";

export default function SellerDashboard() {
  const [show, setShow] = useState("305px");
  const [dropMenuHeight, setDropMenu] = useState(false);
  const [pageTitle, setPageTitle] = useState("home");
  const dropDown = (val) => {
    setShow(val);
  };

  const navigate = useCallback((e) => {
    setPageTitle(e.target.textContent);
  }, []);
  return (
    <div className="s-board">
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
          <div className="ratings" style={{ marginTop: "20px" }}>
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
              <input id="completed" type="checkbox" value="completed" />
              <label for="completed">Completed Request</label>
            </div>
            <div className="stars">
              <input id="new" type="checkbox" value="new" />
              <label for="new">New Request</label>
            </div>
            <div className="pending">
              <input id="pending" type="checkbox" value="pending" />
              <label for="pending">Pending Request</label>
            </div>
            <div className="stars">
              <input id="close" type="checkbox" value="close" />
              <label for="close">Close-by Request</label>
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
                <h3>Test User</h3>
              </div>
            </div>
            <div className="sidenav">
              <ul>
                <li onClick={navigate}>
                  <Icon path={mdiHomeOutline} className="aside-icon" />
                  Customer's Order
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
                  <Icon path={mdiLogoutVariant} className="aside-icon" />
                  Logout
                </li>
              </ul>
            </div>
          </aside>
          <section className="content">
            <div className="head">
              <div className="in-head" style={{ flex: "1" }}>
                S/N
              </div>
              <div className="in-head" style={{ flex: "4" }}>
                Customer
              </div>
              <div className="in-head">Quantity(KG)</div>
              <div className="in-head">Price (#)</div>
              <div className="in-head">Date</div>
            </div>
            <div className="wrapper">
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              <div className="row">
                <div id="sn" className="field" style={{ flex: "1" }}>
                  <span>1</span>
                </div>
                <div id="name" className="field">
                  <div className="img-holder" style={{ backgroundImage: `url(${altimg})` }} ></div>
                  <span>Mr. Owonikoko Komukolo</span>
                </div>
                <div className="field">1903kg</div>
                <div className="field">#44585</div>
                <div className="field">11/85/1125</div>
              </div>
              
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
