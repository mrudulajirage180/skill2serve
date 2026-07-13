import "./Navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/" className="logo">
         Skill2Serve
        </Link>
      </div>

      <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li>
  <ScrollLink
    to="about"
    smooth={true}
    duration={500}
    offset={0}
    style={{ cursor: "pointer" }}
  >
    About
  </ScrollLink>
</li>
  <li><Link to="/services">Services</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/login">Login</Link></li>
</ul>

    </nav>
  );
}

export default Navbar;