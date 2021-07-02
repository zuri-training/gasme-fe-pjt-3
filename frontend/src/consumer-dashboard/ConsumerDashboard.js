import "./ConsumerDashboard.css";
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
  mdiStoreOutline,
  mdiLogoutVariant,
} from "@mdi/js";

export default function ConsumerDashboard() {
  return (
    <div className="c-board">
      <div className="wrap">
        <div className="top">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div>
            <h2>title</h2>
          </div>
          <div className="filter">
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
                <li>
                  <Icon path={mdiHomeOutline} className="aside-icon" />
                  Home
                </li>
                <li>
                  <Icon path={mdiCartOutline} className="aside-icon" />
                  Order History
                </li>
                <li>
                  <Icon
                    path={mdiMessageSettingsOutline}
                    className="aside-icon"
                  />
                  Messages
                </li>
                <li>
                  <Icon path={mdiBellOutline} className="aside-icon" />
                  Notifications
                </li>
                <li>
                  <Icon path={mdiCogOutline} className="aside-icon" />
                  Settings
                </li>
                <li>
                  <Icon path={mdiStoreOutline} className="aside-icon" />
                  Become a seller
                </li>
                <li>
                  <Icon path={mdiLogoutVariant} className="aside-icon" />
                  Logout
                </li>
              </ul>
            </div>
          </aside>
          <section className="content">
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
            <div className="stores">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${""})` }}
              ></div>
              <div className="store-detail">
                <div className="name-star">
                  <h3>The Store Name</h3>
                  <span className="star-holder">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div className="store-address">
                  <p>Store address, street, state</p>
                </div>
                <div className="order-cost">
                  <p>
                    Minimum order :{" "}
                    <span style={{ color: "black" }}>100kg</span>
                  </p>
                  <p style={{ color: "#299445", fontWeight: "bold" }}>
                    #400/kg
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
