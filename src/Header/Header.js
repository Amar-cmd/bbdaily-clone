import "./Header.css";
import logo from "../assets/logo.png";

function Header() {

  return (
    <nav>
      <div className="container">
        <div className="leftNav">
          <img className="logo" src={logo} alt="BBdaily" loading="lazy" />
        </div>
        <div className="rightNav">
          <ul>
            <li>Home</li>
            <li>How it works</li>
            <li>Why bbdaily</li>
            <li>Range</li>
            <li>Guarantees</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
