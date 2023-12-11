import React from "react";
import "../components/app.css";
import "../components/bootstrap.min.css";
import Header from "../components/Header";
import HeaderImage from "../components/HeaderImage";
import Products from "../components/Products";
import Benifits from "../components/benifits";
import Comments from "../components/Comments";
import Popular from "../components/Popular";
import Footer from "../components/Footer";
import  { Toaster } from "react-hot-toast";
import { useData } from "../context/DataContext";
import ReactLoading from "react-loading";
function MainPage() {
  const {  isLoading, users, } = useData();

  

  return (
    <>
      {isLoading && (
        <div className="loading-wrapper ">
          <ReactLoading type="spokes" color="#4B0082" />
        </div>
      )}

      <div className={`App overflow-x-hidden position-relative `}>
        <Toaster />
        <div className="holder px-0 ">
          <Header />
          <HeaderImage />
          <Products></Products>
          <Benifits></Benifits>
          <Comments users={users}></Comments>
          <Popular></Popular>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MainPage;
