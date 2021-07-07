import "./SellerNotification.css";

export default function SellerNotification() {
  return (
    <div className="seller-noti-wrapper">
      <div className="notification">
        <div className="intro">
          <div
            className="img-holder"
            style={{ backgroundImage: `url(${""})` }}
          ></div>
          <div className="name">custormer 1</div>
        </div>
        <div className="text-holder">
          <span>
            Sent you a message
          </span>
        </div>
      </div>
      <div className="notification">
        <div className="intro">
          <div
            className="img-holder"
            style={{ backgroundImage: `url(${""})` }}
          ></div>
          <div className="name">Customer 2 </div>
        </div>
        <div className="text-holder">
          <span>
            Just placed and order</span>
        </div>
      </div>
    </div>
  );
}
