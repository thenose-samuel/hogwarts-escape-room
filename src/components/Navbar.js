import "../styles/Navbar.css";
import Menu from "../assets/images/Menu.png";

import { ORGANISATION_NAME } from "../constants";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-brand">{ORGANISATION_NAME}</div>
      <img src={Menu} alt="menu" />
      {/* <div className="navbar-links">Home</div> */}
    </div>
  );
}

export default Navbar;
