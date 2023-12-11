import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactLoading from "react-loading";
import "./components/bootstrap.min.css";
import "./components/app.css";
import  { Toaster } from "react-hot-toast";
import Mainpage from "./pages/MainPage";
import Cart from "./pages/Cartpage";
import { DataProvider, useData } from "./context/DataContext";
import LoginPage from "./pages/LoginPage";
import { UserAuthProvider } from "./context/userAuth";
import ProductPage from "./pages/ProductPage";

function App() {
  const [showApp, setShowApp] = useState(true);
  const {  isLoading, dispatch } = useData();

  useEffect(() => {
    dispatch({ type: "loading" });
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, showApp]);

  // console.log(productInfo);
  // useEffect(() => {
  //   error !== "" && toast(error);
  // }, [error]);

  return (
    <>
      {isLoading && (
        <div className="loading-wrapper ">
          <ReactLoading type="spokes" color="#4B0082" />
        </div>
      )}
      <div
        className={`App overflow-x-hidden position-relative ${
          showApp ? "transition-appear active" : "transition-appear"
        }`}
      >
       <Toaster />
        <div className="holder px-0 ">
          <DataProvider>
            <UserAuthProvider>
              <BrowserRouter>
              <Suspense fallback={<ReactLoading type="spokes" color="#4B0082"/>}>
                <Routes>
                  <Route index element={<Mainpage />} />
                  <Route path="product" element={<ProductPage />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="login" element={<LoginPage />} />
                </Routes>
                </Suspense>
              </BrowserRouter>
            </UserAuthProvider>
          </DataProvider>
        </div>
      </div>
    </>
  );
}

export default App;
