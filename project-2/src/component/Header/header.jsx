import React from 'react';
import logo from "../../assets/images/icons/logo-sm.png";
import carticon from "../../assets/images/icons/cart-sm.png";
import searchicon from "../../assets/images/icons/search-icon-sm.png";

function Header() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#">
            <img src={logo} alt="Logo" />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">iPhone</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">iPad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Watch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">TV</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Music</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={searchicon} alt="Search" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={carticon} alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;