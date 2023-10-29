import React, { useState, useEffect } from "react";
import "./bootstrap.min.css";
import "./app.css";
import Header from "./Header";
import HeaderImage from "./HeaderImage";
import Products from "./Products";
import Benifits from "./benifits";
import Comments from "./Comments";
import Popular from "./Popular";
import Footer from "./Footer";
import Cart from "./Cart";
import Product from "./Product";
import LoginPage from "./LoginPage";
import toast, { Toaster } from "react-hot-toast";
import ReactLoading from "react-loading";
import axios from "axios";

function App() {
  const [Data, setData] = useState([]);
  const [logedin, setLogedin] = useState(false);
  const [logedinEmail, setLOgedinEmail] = useState("");
  const [cartList, setCartList] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [productInfo, setProductInfo] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showApp, setShowApp] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setShowApp(true);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showApp]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://api.storerestapi.com/users");
      const users = await response.json();
      setUsers(users.data);
    }
    fetchUsers();
    console.log(users);
  }, []);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
        console.log(Data);
      } catch (error) {
        setError(error);
      }
      // finally {
      //   setIsLoading(false);
      // }
    }

    fetchData();
  }, []);

  useEffect(
    function () {
      if (logedin) {
        const userinfo = setUser({ logedinEmail, cartList });
        console.log(userinfo, logedinEmail, cartList);
        console.log(user);
      }
    },
    [cartList, logedin]
  );

  function addHandler(Data) {
    const newItemToCart = {
      id: Data.id,
      title: Data.title,
      description: Data.description,
      category: Data.category,
      price: Number(Data.price),
      quantity: Number(1),
    };

    const existingItem = cartList.find(
      (cartItem) => cartItem.id === newItemToCart.id
    );

    if (existingItem) {
      const updatedCartList = cartList.map((cartItem) =>
        cartItem.id === newItemToCart.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCartList([...updatedCartList]);
    } else {
      setCartList([...cartList, newItemToCart]);
    }

    console.log(cartList);
  }

  function deleteHandler(Data) {
    const selectedItem = {
      id: Data.id,
    };
    console.log(Data, selectedItem.id);

    const findedItem = cartList.find(
      (cartItem) => cartItem.id === selectedItem.id && cartItem
    );
    console.log(findedItem);

    if (findedItem) {
      console.log(findedItem, cartList);

      if (findedItem.quantity <= 1) {
        console.log(findedItem);
        const updatedCart = cartList.filter(
          (cartItem) => cartItem.id !== selectedItem.id
        );
        setCartList([...updatedCart]);
      } else {
        const updatedCart = cartList.map((cartItem) =>
          cartItem.id === selectedItem.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity - 1,
              }
            : cartItem
        );
        setCartList([...updatedCart]);
      }
    }
  }
  // useEffect(
  //   function () {
  //     // console.log(cartList);
  //   },
  //   [cartList]
  // );
  console.log(productInfo);
  useEffect(() => {
    error !== "" && toast(error);
  }, [error]);

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
          {currentPage === "login" ? (
            <LoginPage
              setCurrentPage={setCurrentPage}
              setLogedinEmail={setLOgedinEmail}
              setLogedin={setLogedin}
              setIsLoading={setIsLoading}
            />
          ) : (
            <>
              <Header cartList={cartList} setCurrentPage={setCurrentPage} />
              {currentPage === "home" && (
                <>
                  <HeaderImage />
                  <Products
                    Data={Data}
                    cartList={cartList}
                    // setCartList={setCartList}
                    setCurrentPage={setCurrentPage}
                    setProductInfo={setProductInfo}
                    productInfo={productInfo}
                    addHandler={addHandler}
                    deleteHandler={deleteHandler}
                  ></Products>
                  <Benifits></Benifits>
                  <Comments users={users}></Comments>
                  <Popular Data={Data}></Popular>
                </>
              )}
              {currentPage === "cart" && (
                <Cart cartList={cartList} setCartList={setCartList} deleteHandler={deleteHandler} />
              )}
              {currentPage === "product" && (
                <Product
                  productInfo={productInfo}
                  addHandler={addHandler}
                  deleteHandler={deleteHandler}
                  cartList={cartList}
                ></Product>
              )}
              <Footer />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
