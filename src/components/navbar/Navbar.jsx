import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="/public/assets/images/logo.svg"
        alt="company-logo"
        className="web-logo"
      />
      <ul className="navlist">
        <li className="navitems home">Home</li>
        <li className="navitems new">New</li>
        <li className="navitems popular">Popular</li>
        <li className="navitems trending">Trending</li>
        <li className="navitems categories">Categories</li>
      </ul>
    </nav>
  );
}

export default Navbar;
