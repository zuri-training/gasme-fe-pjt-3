import "./How.css";

import onegas from "../assets/one-gas.png";
import arrow from "../assets/arr.png";
import bike from "../assets/bike.png";
import phone from "../assets/phone.png";
import gases from "../assets/3gas.png";

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
