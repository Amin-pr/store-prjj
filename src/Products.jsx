import { useState } from "react";
import "./app.css";
function Products({
  Data,
  cartList,
  setCartList,
  setCurrentPage,
  setProductInfo,
  addHandler,
  deleteHandler,
}) {
  const [category, setCategory] = useState("all");

  // function addHandler(Data) {
  //   const newItemToCart = {
  //     id: Data.id,
  //     title: Data.title,
  //     description: Data.description,
  //     category: Data.category,
  //     price: Number(Data.price),
  //     quantity: Number(1),
  //     image: Data.image,
  //   };

  //   const existingItem = cartList.find(
  //     (cartItem) => cartItem.id === newItemToCart.id
  //   );

  //   if (existingItem) {
  //     const updatedCartList = cartList.map((cartItem) =>
  //       cartItem.id === newItemToCart.id
  //         ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //         : cartItem
  //     );
  //     setCartList([...updatedCartList]);
  //   } else {
  //     setCartList([...cartList, newItemToCart]);
  //   }

  //   console.log(cartList);
  // }
  console.log(cartList?.length);

  function productHandler(Data) {
    setProductInfo(Data);
    setCurrentPage("product");
  }

  // function deleteHandler(Data) {
  //   const selectedItem = {
  //     id: Data.id,
  //   };

  //   const findedItem = cartList.find((cartItem) => {
  //     return cartItem.id === selectedItem.id;
  //   });
  //   if (findedItem) {
  //     if (findedItem.quantity === 0) {
  //       const updatedCart = cartList.filter(
  //         (cartItem) => cartItem.id !== selectedItem.id
  //       );
  //       setCartList(updatedCart);
  //     } else {
  //       const updatedCart = cartList.map(
  //         (cartItem) => cartItem.id === selectedItem.id && cartItem.quantity - 1
  //       );
  //       setCartList(updatedCart);
  //     }
  //   }
  // }

  // useEffect(() => {
  //   if (productInfo) {
  //     setCurrentPage("Product");
  //   }
  // }, [productInfo, setCurrentPage]);

  return (
    <div className="products container  py-5  blob-background">
      <h3 className="text-center d-block m-2 h3">Products</h3>
      <p className="text-center d-block mt-2 mb-5">
        Order it for you or for your beloved ones{" "}
      </p>
      <div
        className="products-cats-btn-holder btn-group col-12 row  my-3"
        role="group"
        aria-label="Basic example"
      >
        <button
          className="btn products-category-btn col-12 col-md-2"
          onClick={() => setCategory("men's clothing")}
          autocomplete="off"
          aria-pressed="true"
          data-bs-toggle="button"
        >
          Men clothing
        </button>
        <button
          className="btn products-category-btn col-12 col-md-2"
          onClick={() => setCategory("women's clothing")}
          autocomplete="off"
          aria-pressed="true"
          data-bs-toggle="button"
        >
          Women clothing
        </button>
        <button
          className="btn products-category-btn col-12 col-md-2 active"
          onClick={() => setCategory("all")}
          autocomplete="off"
          aria-pressed="true"
          data-bs-toggle="button"
        >
          All
        </button>

        <button
          className="btn products-category-btn col-12 col-md-2"
          onClick={() => setCategory("jewelery")}
          data-bs-toggle="button"
          autocomplete="off"
          aria-pressed="true"
        >
          Jewelry
        </button>
        <button
          className="btn products-category-btn col-12 col-md-2"
          onClick={() => setCategory("electronics")}
          autocomplete="off"
          aria-pressed="true"
          data-bs-toggle="button"
        >
          Electronics
        </button>
      </div>
      {/* <Product Data={Data}></Product> */}
      <div className="card-holder row justify-content-center  ">
        {category === "all"
          ? Data.map((Data) => (
              <div class="container card border-1 m-2 p-2 d-flex col-5 col-lg-3 col-md-5">
                <div className="image-wrapper">
                  <img
                    src={Data.image}
                    class="banner-image card-image-top border-0 h-"
                    alt="product"
                  />
                </div>
                <div class="wrapper row  flex-wrap pt-2 justify-content-center">
                  <p className="my-3 mx-1 col-12"> {Data.title}</p>
                  <p className=" h5 m-3 col-sm-6 align-self-center justify-self-center col-12 ">
                    {Data.price}$
                  </p>
                </div>
                <div class="button-wrapper m-0  align-self-end p-2 col-12  row ">
                  <button
                    class="btn products-category-btn col-12 col-sm-5"
                    onClick={() => productHandler(Data)}
                    onMouseEnter={() => setProductInfo(Data)}
                  >
                    Details
                  </button>
                  <button
                    class="btn products-category-btn col-12 col-sm-6  "
                    onMouseEnter={() => setProductInfo(Data)}
                    onClick={() => addHandler(Data)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          : Data.filter((Data) => Data.category === category).map((Data) => (
              <div class="container card border-1 m-2 p-2 d-flex col-5 col-lg-3 col-md-5">
                <div className="image-wrapper">
                  <img
                    src={Data.image}
                    class="banner-image card-image-top border-0 h-"
                    alt="product"
                  />
                </div>
                <div class="wrapper row  flex-wrap pt-2 justify-content-center">
                  <p className="my-3 mx-1 col-12"> {Data.title}</p>
                  <p className=" h5 m-3 col-sm-6 align-self-center justify-self-center col-12 ">
                    {Data.price}$
                  </p>
                </div>
                <div class="button-wrapper m-0  align-self-end p-2 col-12  row ">
                  <button
                    class="btn products-category-btn col-12 col-sm-5"
                    onClick={() => productHandler(Data)}
                    onMouseEnter={() => setProductInfo(Data)}
                  >
                    Details
                  </button>
                  <button
                    class="btn products-category-btn col-12 col-sm-6  "
                    onMouseEnter={() => setProductInfo(Data)}
                    onClick={() => addHandler(Data)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
export default Products;
