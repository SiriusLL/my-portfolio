import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MyPortfolio
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nave-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;

// const NavBar = () => {
//   return (
//     <>
//       <div>Resume</div>
//       <div>skills</div>
//       <div>Education</div>
//       <div>References</div>
//       <div>Contact</div>
//     </>
//   );
// };

// export default NavBar;
