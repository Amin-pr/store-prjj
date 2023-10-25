function Products({
  Data,
  cartList,
  setCartList,
  setCurrentPage,
  setProductInfo,
  addHandler,
  deleteHandler,
}) {
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
  console.log(cartList.length);

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
    <div className="product container my-5 py-5">
      <h3 className="text-center d-block m-2 h3">Products</h3>
      <p className="text-center d-block mt-2 mb-5">
        Order it for you or for your beloved ones{" "}
      </p>
      <div className="card-holder row row-cols-4 flex-wrap justify-content-center  ">
        {/* <Product Data={Data}></Product> */}
        {Data.map((Data) => (
          <div class="container card border-1 m-2 p-2 d-flex ">
            <img
              src={Data.image}
              class="banner-image card-image-top border-0"
              alt="product"
            />
            <div class="wrapper ">
              <p> {Data.title}</p>
              <p className="text-start">{Data.price}$</p>
            </div>
            <div class="button-wrapper align-self-end">
              <button
                class="btn outline"
                onClick={() => productHandler(Data)}
                onMouseEnter={() => setProductInfo(Data)}
              >
                DETAILS
              </button>
              <button
                class="btn fill"
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
