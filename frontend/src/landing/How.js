import "./How.css";

import onegas from "../assets/img/one-gas.png";
import arrow from "../assets/img/arr.png";
import bike from "../assets/img/bike.png";
import phone from "../assets/img/phone.png";
import gases from "../assets/img/3gas.png";

export default function How() {
  return (
    <div className="how-wrapper" id="serv-ices">
      <div className="title">
        {" "}
        <h1>HOW IT WORKS</h1>
      </div>
      <div className="content-wrapper">
        <div className="img-holder">
          <img src={onegas} alt="" />
          <span>Order for your gas from your home</span>
        </div>
        <img className="arr" src={arrow} alt="" />
        <div className="img-holder">
          <img src={bike} alt="" />
          <span>Gas seller brings the gas you ordered</span>
        </div>
        <img className="arr" src={arrow} alt="" />
        <div className="img-holder">
          <img src={phone} alt="" />
          <span>Make payments</span>
        </div>
        <img className="arr" src={arrow} alt="" />
        <div className="img-holder">
          <img src={gases} alt="" />
          <span>Recieve your gas</span>
        </div>
      </div>
    </div>
  );
}
