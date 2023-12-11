import { useData } from "../context/DataContext";

function ProductInfo() {

  const { productInfo, addHandler, deleteHandler, cartList } = useData();

  const quantity = cartList?.map((product) =>
    product.id === productInfo.id ? product.quantity : ""
  );
 
  return (
    productInfo && (
      <div
        className="card bg-white py-5 px-5 border-0 blob-background-cover"
        style={{ maxWidth: 768 }}
      >
        <img src="./src/pic/blobanimation.svg" alt="" />
        <div className="row g-5">
          <div className="col-4">
            <img
              src={productInfo.image}
              className="img-fluid rounded-start"
              alt="product"
            />
          </div>
          <div className="col-md-8 ">
            <div className="card-body">
              <h5 className="card-title">{productInfo.title}</h5>
              <br />
              <p className="card-text text-start">{productInfo.description}</p>
              <p className="card-text text-start  h5">
                ⭐{productInfo.rating.rate}
              </p>

              <p className="h3 text-start">{productInfo.price} $</p>
              <p className="card-text  text-start">
                {/* <small className="text-muted">Last updated 3 mins ago</small> */}
              </p>
              <br />
              <div
                className="btn-group"
                role="group"
                aria-label="Basic button group"
              >
                {quantity >= 1 ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => deleteHandler(productInfo)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary disabled"
                      aria-disabled="true"
                    >
                      {quantity}
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => addHandler(productInfo)}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
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

export default ProductInfo;
