import "./SellerSetting.css";
export default function SellerSetting() {
  return (
    <div className="seller-setting-wrap">
      <form>
        
        <div className="name">
          <input type="text" placeholder="Business Name" />
        </div>
        <div className="email">
        <input type="text" placeholder="Email" />
        </div>
        <div className="number">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="password">
          <input type="password" placeholder="New Password" />
        </div>
        <div className="address">
          <input type="text" placeholder="Business Location" />
        </div>
        <div className="qty">
          <input type="text" placeholder="Quantity Of Gas Available" />
        </div>
        <div className="Price List">
          <input type="text" placeholder="Price List" />
        </div>
        <button>Update</button>
      </form>
      
    </div>
  );
}
