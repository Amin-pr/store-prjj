import { useState } from "react";
import LoginPage from "./LoginPage";

function Header({ cartList, setCurrentPage }) {
  const headerSrc = process.env.PUBLIC_URL + "./logo.png";

  function userIconHandler(loggedIn) {
    loggedIn === true
      ? setCurrentPage("userHome")
      : setCurrentPage("LoginPage");
  }

  const cartItemsNum = cartList?.reduce((total, cartItem) => {
    return total + cartItem.quantity;
  }, 0);

  return (
    <header className="header py-3">
      <nav className="navbar container row text-center  align-items-center justify-content-between flex-nowrap mx-auto ">
        <div className="left-btn header-logo  navbar-brand justify-content-start d-flex col-2">
          <img src={headerSrc} alt="logo" className="header-logo " />
          <div className="input-group"></div>
        </div>
        <div className="mid-btn col row text-nowrap text-center justify-content-around">
          <div className="dropdown text-center col ">
            <button
              className="btn dropdown-toggle header-btn "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Discovery
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              dropdown
              <li>
                <a href="#2" className="dropdown-item h2">
                  1
                </a>
              </li>
              <li>
                <a href="#2" className="dropdown-item h2">
                  1
                </a>
              </li>
              <li>
                <a href="#5" className="dropdown-item h3">
                  1
                </a>
              </li>
              <li>
                <a href="#2" className="dropdown-item">
                  1
                </a>
              </li>
            </ul>
          </div>
          <button
            className="btn col header-btn"
            onClick={() => setCurrentPage("home")}
          >
            Home
          </button>
          <button className="btn col header-btn">Contact Us</button>
        </div>
        <div className="right-btn col d-flex flex-nowrap justify-content-center col-2">
          <button
            href="#"
            className="btn position-relative header-btn"
            onClick={() => setCurrentPage("cart")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart "
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span className="badge bg-danger position-absolute top-0 start-80">
              {cartItemsNum >= 1 ? cartItemsNum : ""}
            </span>
          </button>
          <button
            href="#"
            className="btn header-btn"
            onClick={() => setCurrentPage("login")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
