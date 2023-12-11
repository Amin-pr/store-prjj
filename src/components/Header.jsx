import { NavLink } from "react-router-dom";
import { useData } from "../context/DataContext";

function Header() {
  const headerSrc = process.env.PUBLIC_URL + "./logo.png";
  const { cartList, setCurrentPage } = useData();
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
      <nav className="navbar container row text-center  align-items-center justify-content-between flex-nowrap mx-auto px-2 ">
        <div className="left-btn header-logo  navbar-brand justify-content-start d-flex col">
          <img src={headerSrc} alt="logo" className="header-logo " />
          <div className="input-group"></div>
        </div>
        <div className="mid-btn col-8  row text-nowrap text-center justify-content-around">
          <button
            className=" dropdown-toggle header-btn btn  text-center col col-sm-3 "
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Discovery
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
          </button>
          <NavLink to={"/"} className="btn  header-btn col col-sm-3">
            Home
          </NavLink>
          <NavLink to={"/"} className="btn text-center header-btn col col-sm-3">
            Contact Us
          </NavLink>
        </div>
        <div className="right-btn col row  justify-content-around ">
          <NavLink
            to={"/cart"}
            className="btn position-relative header-btn col col-sm-5"
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
            <span className="badge bg-danger  text-center ">
              {cartItemsNum >= 1 ? cartItemsNum : ""}
            </span>
          </NavLink>
          <NavLink to={"/login "} className={"btn header-btn col-12 col-sm-5"}>
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
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
