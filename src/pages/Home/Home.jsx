import "./Home.css";
import { useEffect } from "react";
import Sticker from "../../components/Sticker/Sticker";

export default function Home({ setPage }) {
  useEffect(() => {
    setPage("home");
  }, []);

  return (
    <div className="Home">
      <div className="title">
        <h2>
          THE LARGEST USED BOOKSTORE
          <br />
          IN NEW ENLGAND
        </h2>
      </div>
      <div className="subtitle">
        <h4>
          <a href="https://www.google.com/maps/place/256+Cambridge+St,+Burlington,+MA+01803/@42.5139342,-71.2050267,17z/data=!3m1!4b1!4m6!3m5!1s0x89e39fe6726d552f:0xba31f4739f1628!8m2!3d42.5139303!4d-71.2024518!16s%2Fg%2F11bw4nnt1w?entry=ttu">
            256 Cambridge St., Burlington, MA 01803
          </a>
        </h4>
        <h4>|</h4>
        <h4>(781) 272-6650</h4>
      </div>
      <hr />
      <div className="intro">
        <p>
          We have over{" "}
          <strong>
            <em>100,000</em>
          </strong>{" "}
          books on our shelves, and we add more every single day, so you never
          know what you’ll find. Visit us and explore!
        </p>
        <p>
          And those reusable bags you have in your car? You’re probably gonna
          need a few more.
        </p>
      </div>
      <div className="inventory">
        <div className="list">
          <h4>We have more than books. We also have:</h4>
          <ul>
            <li>DVDs</li>
            <li>Blu-rays</li>
            <li>Comic books</li>
            <li>Video games</li>
            <li>Records</li>
            <li>CDs</li>
            <li>And more!</li>
          </ul>
          <p>
            Nothing sits on our shelves for more than <strong>6 months</strong>!
          </p>
        </div>
      </div>
      <div className="price">
        <h3>PRICE STICKER DISCOUNTS</h3>
        <p>
          We <strong>always</strong> have sales happening for our used items,
          ranging from an extra <strong>20%</strong> to <strong>80%</strong>{" "}
          off!
        </p>
        <p className="disclaimer">
          *Excludes clearance, comic books, and records.
        </p>
        <div className="dates">
          <p>Monday, August 19th through Sunday, August 25th</p>
        </div>
        <div className="stickers">
          <Sticker color={"pink"} discount={75} />
          <Sticker color={"green"} discount={30} />
          <Sticker color={"yellow"} discount={20} />
        </div>
      </div>
      <div className="hours">
      <hr />
        <h3>STORE HOURS</h3>
        <p>Monday – Saturday: 10 AM to 7 PM</p>
        <p>Sunday: 10 AM to 6 PM</p>
      </div>
    </div>
  );
}
