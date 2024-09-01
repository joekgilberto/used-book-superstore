import "./Header.css";

export default function Header({ page }) {
  return (
    <header>
      <h1>
        <a href="/">USED BOOK SUPERSTORE</a>
      </h1>
      <nav>
        <ul>
          <a className={page === "home" ? "selected" : ""} href="/">
            <li>HOME</li>
          </a>
          <a className={page === "products" ? "selected" : ""} href="/products">
            <li>PRODUCTS</li>
          </a>
          <a className={page === "sell" ? "selected" : ""} href="/sell">
            <li>SELL YOUR STUFF</li>
          </a>
          <a className={page === "about" ? "selected" : ""} href="/about">
            <li>ABOUT US</li>
          </a>
          <a className={page === "contact" ? "selected" : ""} href="/contact">
            <li>CONTACT US</li>
          </a>
          <a className={page === "faq" ? "selected" : ""} href="/faqs">
            <li>FAQs</li>
          </a>
        </ul>
        <button>NEWSLETTER SIGN-UP</button>
      </nav>
    </header>
  );
}
