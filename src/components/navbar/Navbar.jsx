import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="./src/assets/images/logo.svg"
        alt="company-logo"
        className="web-logo"
      />
      <ul className="navlist">
        <li className="navitems">Home</li>
        <li className="navitems">New</li>
        <li className="navitems">Popular</li>
        <li className="navitems">Trending</li>
        <li className="navitems">Categories</li>
      </ul>
    </nav>
  );
}

export default Navbar;
