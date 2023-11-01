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
          className="btn-group col-12  my-3"
          role="group"
          aria-label="Basic example"
        >
          <button
            className="btn products-category-btn"
            onClick={() => setCategory("men's clothing")}
            autocomplete="off"
            aria-pressed="true"
            data-bs-toggle="button"
          >
            Men clothing
          </button>
          <button
            className="btn products-category-btn"
            onClick={() => setCategory("women's clothing")}
            autocomplete="off"
            aria-pressed="true"
            data-bs-toggle="button"
          >
            Women clothing
          </button>
          <button
            className="btn products-category-btn active"
            onClick={() => setCategory("all")}
            autocomplete="off"
            aria-pressed="true"
            data-bs-toggle="button"
          >
            All
          </button>

          <button
            className="btn products-category-btn"
            onClick={() => setCategory("jewelery")}
            data-bs-toggle="button"
            autocomplete="off"
            aria-pressed="true"
          >
            Jewelry
          </button>
          <button
            className="btn products-category-btn"
            onClick={() => setCategory("electronics")}
            autocomplete="off"
            aria-pressed="true"
            data-bs-toggle="button"
          >
            Electronics
          </button>
        </div>
        {/* <Product Data={Data}></Product> */}
        <div className="card-holder row   flex-wrap justify-content-center  ">
        {category === "all"
          ? Data.map((Data) => (
              <div class="container card border-1 m-2 p-2 d-flex position-relative col-lg-3 col-md-5">
                <img
                  src={Data.image}
                  class="banner-image card-image-top border-0 h-50"
                  alt="product"
                />
                <div class="wrapper d-flex flex-wrap align-bottom pt-2 h-50">
                  <p className="my-3 mx-1 "> {Data.title}</p>
                  <p className="text-start h5 m-3 ">{Data.price}$</p>
                </div>
                <div class="button-wrapper align-self-end p-2  position-absolute bottom-0 start-50 translate-middle-x">
                  <button
                    class="btn products-category-btn"
                    onClick={() => productHandler(Data)}
                    onMouseEnter={() => setProductInfo(Data)}
                  >
                    Details
                  </button>
                  <button
                    class="btn products-category-btn  "
                    onMouseEnter={() => setProductInfo(Data)}
                    onClick={() => addHandler(Data)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          : Data.filter((Data) => Data.category === category).map((Data) => (
              <div class="container card border-1 m-2 p-2 d-flex col-lg-3 col-md-5">
                <img
                  src={Data.image}
                  class="banner-image card-image-top border-0 "
                  alt="product"
                />
                <div class="wrapper pt-5">
                  <p> {Data.title}</p>
                  <p className="text-start h5">{Data.price}$</p>
                </div>
                <div class="button-wrapper align-self-end ">
                  <button
                    class="btn products-category-btn"
                    onClick={() => productHandler(Data)}
                    onMouseEnter={() => setProductInfo(Data)}
                  >
                    Details
                  </button>
                  <button
                    class="btn products-category-btn"
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
