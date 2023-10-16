import Product from "./Product";
import { useEffect } from "react";
function Products({
  Data,
  cartList,
  setCartList,
  setCurrentPage,
  setProductInfo,
  productInfo,
}) {
  function addHandler(Data) {
    const newItemToCart = {
      id: Data.id,
      title: Data.title,
      description: Data.description,
      category: Data.category,
      price: Number(Data.price),
      quantity: Number(1),
      image: Data.image
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
  console.log(cartList.length);

  function productHandler(Data) {
    setProductInfo(Data);
    setCurrentPage("product");
  }

  // useEffect(() => {
  //   if (productInfo) {
  //     setCurrentPage("Product");
  //   }
  // }, [productInfo, setCurrentPage]);

  return (
    <div className="product container my-5 py-5">
      <h3 className="text-center d-block m-2 h3">Products</h3>
      <p className="text-center d-block mt-2 mb-5">
        Order it for you or for your beloved ones{" "}
      </p>
      <div className="card-holder row row-cols-4 flex-wrap justify-content-center  ">
        {/* <Product Data={Data}></Product> */}
        {Data.map((Data) => (
          <div class="container mx-2 my-4">
              <img src={Data.image} class="banner-image" alt="product" />
            <div class="wrapper">

              <h5> {Data.title}</h5>
              <p style={{ fontSize: 14 }}>{Data.description}</p>
            </div>
            <div class="button-wrapper">
              <button
                class="btn outline"
                onClick={() => productHandler(Data)}
                onMouseEnter={() => setProductInfo(Data)}
              >
                DETAILS
              </button>
              <button class="btn fill" onClick={() => addHandler(Data)}>
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
