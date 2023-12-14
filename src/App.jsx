import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactLoading from "react-loading";
import "./components/bootstrap.min.css";
import "./components/app.css";
import toast, { Toaster } from "react-hot-toast";
import "./pages/MainPage";
import { DataProvider, useData } from "./context/DataContext";
import { UserAuthProvider, useAuth } from "./context/userAuth";
import Cart from "./pages/Cartpage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage";
import ProductInfoPage from "./pages/ProductInfoPage";

function App() {
  const [showApp, setShowApp] = useState(true);
  const { isLoading, dispatch, error } = useData();
  const { isAuthLoading } = useAuth();

  useEffect(() => {
    dispatch({ type: "loading" });

    const timer = setTimeout(() => {
      dispatch({ type: "loaded" });
      setShowApp(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [dispatch, showApp]);

  useEffect(() => {
    error !== "" && toast(error);
  }, [error]);

  // const MainPage = lazy(() => import("./pages/MainPage"));
  // const Cart = lazy(() => import("./pages/Cartpage"));
  // const LoginPage = lazy(() => import("./pages/LoginPage"));
  // const ProductPage = lazy(() => import("./pages/ProductPage"));

  return (
    <>
      <Toaster />
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
        <div className="holder px-0 ">
          <DataProvider>
            <UserAuthProvider>
              <BrowserRouter>
                <Suspense
                  fallback={<ReactLoading type="spokes" color="#4B0082" />}
                >
                  <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="products" element={<ProductPage />}></Route>
                    <Route
                      path="products/:id"
                      element={<ProductInfoPage />}
                    ></Route>
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
