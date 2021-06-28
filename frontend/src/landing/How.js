import "./How.css";

import onegas from "../assets/img/one-gas.png";
import arrow from "../assets/img/arr.png";
import bike from "../assets/img/bike.png";
import phone from "../assets/img/phone.png";
import gases from "../assets/img/3gas.png";

export default function How() {
  return (
    <div className="how-wrapper">
      <div className="title">
        {" "}
        <h1>HOW IT WORKS</h1>
      </div>
      <div className="content-wrapper">
        <img src={onegas} alt="" />
        <img  className="arr" src={arrow} alt="" />
        <img src={bike} alt="" />
        <img className="arr" src={arrow} alt="" />
        <img src={phone} alt="" />
        <img className="arr" src={arrow} alt="" />
        <img src={gases} alt="" />
      </div>
    </div>
  );
}
