import React from "react";
import "../components/app.css";
import "../components/bootstrap.min.css";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import Benifits from "../components/benifits";
import Comments from "../components/Comments";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import { useData } from "../context/DataContext";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
function MainPage() {
  const { isLoading, users } = useData();

  return (
    <>
      {isLoading && (
        <div className="loading-wrapper ">
          <ReactLoading type="spokes" color="#4B0082" />
        </div>
      )}

      <div className={`App overflow-x-hidden position-relative `}>
        <div className="holder px-0 ">
          <Header />
          <HeaderImage />
          <Popular></Popular>
          <div className="w-100 link-to-products-holder d-flex justify-content-center align-items-center ">
            <Link className="btn products-page-btn text-white py-5" to={"products"} >
              All our Products
            </Link>
          </div>
          <Benifits></Benifits>
          <Comments users={users}></Comments>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainPage;
