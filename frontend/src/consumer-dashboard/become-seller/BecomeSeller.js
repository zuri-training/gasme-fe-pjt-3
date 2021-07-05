import "./BecomeSeller.css";
export default function BecomeSeller() {
  return (
    <div className="become-seller-wrapper">
      <form>
        <div className="vendor-name">
          <input type="text" placeholder="Vendor Name" />
        </div>
        <div className="range">
          <input id="min" type="text" placeholder="Min Range" />
          <input id="max" type="text" placeholder="Max Range" />
        </div>
        <div className="number">
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className="price">
          <input type="text" placeholder="Price Per Kg" />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
}
