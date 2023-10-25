function Product({ productInfo, addHandler, deleteHandler, cartList }) {
  const quantity = cartList.map((product) =>
    product.id === productInfo.id ? product.quantity : ""
  );
  console.log(quantity)
  return (
    productInfo && (
      <div class="card my-5 mx-5 border-0" style={{ maxWidth: 768 }}>
        <div class="row g-5">
          <div class="col-4">
            <img
              src={productInfo.image}
              class="img-fluid rounded-start"
              alt="product"
            />
          </div>
          <div class="col-md-8 ">
            <div class="card-body">
              <h5 class="card-title">{productInfo.title}</h5>
              <br />
              <p class="card-text text-start">{productInfo.description}</p>
              <p className="card-text text-start  h5">
                ⭐{productInfo.rating.rate}
              </p>
              <br />

              <p className="h3 text-start">{productInfo.price} $</p>
              <p class="card-text  text-start">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <br />
              <div
                class="btn-group"
                role="group"
                aria-label="Basic button group"
              >
                {quantity >= 1 ? (
                  <>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => deleteHandler(productInfo)}
                    >
                      -
                    </button>
                    <button type="button" class="btn btn-primary">
                      {quantity}
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => addHandler(productInfo)}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => addHandler(productInfo)}
                  >
                    Add to 🛍️
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Product;
