import "./SellerMessage.css";
export default function SellerMessage() {
  return (
    <div className="seller-msg-wrapper">
      <div className="display">
        <div className="dmsg cust-msg">
          <div className="user">
            <span>Customer</span>
          </div>
          <div className="msg">
            <span className="message">Yo! Good Morning!</span>
          </div>
        </div>

        <div className="dmsg seller-msg">
          <div className="user">
            <span>Seller</span>
          </div>
          <div className="msg">
            <span className="message">Hey, What's up?</span>
          </div>
        </div>

        <div className="dmsg cust-msg">
          <div className="user">
            <span>Customer</span>
          </div>
          <div className="msg">
            <span className="message">oy!, I need some gas</span>
          </div>
        </div>
      </div>
      <div className="type-message">
        <input type="text" placeholder="Enter Message" />
        <button>Send</button>
      </div>
    </div>
  );
}
