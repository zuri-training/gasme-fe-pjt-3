import "./About.css";

export default function About() {
  return (
    <div className="about-wrapper">
      <div className="about-title">
        <h2>About Us</h2>
      </div>
      <div className="about-body">
        <p>
          <h3>Who we Are</h3>
          <span>
            Gas & Me is a company that works to connect Sellers of LPG (Cooking
            Gas) retailing across the country, to their consumers.
          </span>
        </p>
        <p>
          <h3>Our Aim</h3>
          <span>
            To ease and enhance productivity in the LPG Sector & Business, by
            providing a meeting point our app, for Bulk Sellers, Retailers and
            the Final consumer.
          </span>
        </p>
        <p>
          <h3>For Retailers & Wholesalers</h3>
          <span>
            Through Gas & Me, retailers and wholesalers can have direct access
            to the final consumers of LPG especially those in their locality by
            creating virtual stations and catering to the LPG needs of the
            consumers.
          </span>
        </p>
        <p>
          <h3>For Consumers</h3>
          <span>
            Through Gas & Me, consumers can reach LPG retailers and wholesalers
            near them to cater for their LPG needs. The process is seamless and
            eliminates stress.
          </span>
        </p>
      </div>
    </div>
  );
}
