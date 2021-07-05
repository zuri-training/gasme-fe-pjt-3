import "./CustomerSetting.css";
export default function CustomerSetting() {
  return (
    <div className="customer-setting-wrap">
      <form>
        <div className="name">
          <input type="text" placeholder="Name" />
        </div>
        <div className="email">
        <input type="text" placeholder="Email" />
        </div>
        <div className="number">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="password">
          <input type="password" placeholder="Password" />
        </div>
        <button>Update</button>
      </form>
    </div>
  );
}
