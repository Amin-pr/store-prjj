import { useEffect } from "react";

function CartList({ cartList, setCartList }) {
  useEffect(() => {
    const updatedCartList = cartList?.map((cartItem) => ({
      ...cartItem,
      total: cartItem.quantity * cartItem.price,
    }));
    setCartList(updatedCartList);
    console.log(updatedCartList);
  }, [setCartList]);

  const cartTotal = cartList?.reduce((total, cartItem) => {
    return total + cartItem.total;
  }, 0);
  return (
    <div className="cart-list ">
      <div className="cart-top text-center my-5">
        <p className="h3 my-5">Your cart items</p>
        <button href="#" className="color-blue btn">
          Back to shopping
        </button>
      </div>
      <div className="cart-main d-flex justify-content-center flex-column align-items-center">
        <table className="table w-75">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col-3">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartList?.map((cartItem) => (
              <tr key={cartItem.id}>
                <th scope="row">
                  <img src={cartItem.image} alt="" style={{ maxWidth: 50 }} />
                </th>
                <th scope="row" className="align-middle">
                  {cartItem.title}
                </th>
                <td className="align-middle">{cartItem.price}</td>
                <td className="align-middle">{cartItem.quantity}</td>
                <td className="align-middle">
                  {Math.trunc(cartItem.total * 10) / 10}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {cartTotal ? <p className="mt-5 h3">Cart price: {cartTotal}</p> : ""}
      </div>
    </div>
  );
}

function Cart({ cartList, setCartList }) {
  return (
    <section className="cart-page  my-5">
      <CartList cartList={cartList} setCartList={setCartList} />
    </section>
  );
}

export default Cart;
