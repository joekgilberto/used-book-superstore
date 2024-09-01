import "./Home.css";

export default function Home() {
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
        <h3>
          <a href="https://www.google.com/maps/place/256+Cambridge+St,+Burlington,+MA+01803/@42.5139342,-71.2050267,17z/data=!3m1!4b1!4m6!3m5!1s0x89e39fe6726d552f:0xba31f4739f1628!8m2!3d42.5139303!4d-71.2024518!16s%2Fg%2F11bw4nnt1w?entry=ttu">
            256 Cambridge St., Burlington, MA 01803
          </a>
        </h3>
        <h3>|</h3>
        <h3>(781) 272-6650</h3>
      </div>
      <hr />
      <div className="intro">
        <p>
          We have over <strong><em>100,000</em></strong> books on our shelves, and we add more every
          single day, so you never know what you’ll find. Visit us and explore!
        </p>
        <p>
          And those reusable bags you have in your car? You’re probably gonna
          need a few more.
        </p>
      </div>
      <div className="inventory">
        <div className="list">
          <p>We have more than books. We also have:</p>
          <ul>
            <li>DVDs</li>
            <li>Blu-rays</li>
            <li>Comic books</li>
            <li>Video games</li>
            <li>Records</li>
            <li>CDs</li>
            <li>And more!</li>
          </ul>
        </div>
      </div>
      <p>Nothing sits on our shelves for more than <strong><em>6 months</em></strong>!</p>
    </div>
  );
}
