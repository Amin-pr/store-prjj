function Product({ productInfo,addHandler }) {
  console.log(productInfo);
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
              <p class="card-text">{productInfo.description}</p>

              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <button className=" btn bg-success card-text text-white" onClick={()=>addHandler(productInfo)}>{productInfo.price} $</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Product;
