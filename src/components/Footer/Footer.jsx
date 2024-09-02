import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a href="https://www.facebook.com/UBSuperstore/" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/600px-Facebook_icon_2013.svg.png?20161223201621"
            alt="Facebook logo"
          />
          <p>Used Book Superstore- Burlington</p>
        </a>
        <a href="https://www.instagram.com/usedbooksuperstore" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png?20220518162235"
            alt="Facebook logo"
          />
          <p>@usedbooksuperstore</p>
        </a>
        <a href="https://www.tiktok.com/@usedbooksuperstore" target="_blank">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/192px-Tiktok_icon.svg.png?20240827133148"
            alt="Facebook logo"
          />
          <p>@usedbooksuperstore</p>
        </a>
      </div>
      <hr />
      <p>Copyright © 2024 Used Book Superstore</p>
    </footer>
  );
}
