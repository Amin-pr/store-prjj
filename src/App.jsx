import { useState, useEffect, useRef } from "react";
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

function App() {
  const [Data, setData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");
  const [productInfo, setProductInfo] = useState({});

  useEffect(function () {
    async function fetchedData() {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      setData(data);
      console.log(data);
    }
    fetchedData();
  }, []);

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
  // useEffect(
  //   function () {
  //     // console.log(cartList);
  //   },
  //   [cartList]
  // );
  console.log(productInfo);
  return (
    <div className="App bg-secondary vh-100 overflow-x-hidden">
      <div className="holder bg-white px-0 ">
        {currentPage === "login" ? (
          <LoginPage setCurrentPage={setCurrentPage} setUser={setUser} user={user}/>
        ) : (
          <>
            <Header cartList={cartList} setCurrentPage={setCurrentPage} />
            {currentPage === "home" && (
              <>
                <HeaderImage />
                <Products
                  Data={Data}
                  cartList={cartList}
                  setCartList={setCartList}
                  setCurrentPage={setCurrentPage}
                  setProductInfo={setProductInfo}
                  productInfo={productInfo}
                  addHandler={addHandler}
                ></Products>
                <Benifits></Benifits>
                <Comments></Comments>
                <Popular></Popular>
              </>
            )}
            {currentPage === "cart" && (
              <Cart cartList={cartList} setCartList={setCartList} />
            )}
            {currentPage === "product" && (
              <Product
                productInfo={productInfo}
                addHandler={addHandler}
              ></Product>
            )}
            <Footer />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
