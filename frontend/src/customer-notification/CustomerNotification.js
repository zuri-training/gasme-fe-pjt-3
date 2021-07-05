import "./CustomerNotification.css";

export default function CustomerNotification() {
  return (
    <div className="customer-noti-wrapper">
      <div className="notification">
        <div className="intro">
          <div
            className="img-holder"
            style={{ backgroundImage: `url(${""})` }}
          ></div>
          <div className="name">total Oil and Gas</div>
        </div>
        <div className="text-holder">
          <span>
            Your gas is will be delivered today. Please keep your phone handy.
            Your gas is will be delivered today. Please keep your phone
            handy.Your gas is will be delivered today. Please keep your phone
            handy.
          </span>
        </div>
      </div>
      <div className="notification">
        <div className="intro">
          <div
            className="img-holder"
            style={{ backgroundImage: `url(${""})` }}
          ></div>
          <div className="name">total Oil and Gas</div>
        </div>
        <div className="text-holder">
          <span>
            Your gas is will be delivered today. Please keep your phone handy.</span>
        </div>
      </div>
    </div>
  );
}
