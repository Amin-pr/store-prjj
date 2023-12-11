import { useState } from "react";
import "./app.css";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";
function Products() {
  const [category, setCategory] = useState("all");
  const navigate = useNavigate();
  const { Data, addHandler, dispatch } = useData();
  function productHandler(Data) {
    dispatch({ type: "item/select", payload: Data });
    navigate("product");
  }
  return (
    <div className="products container  py-5  blob-background">
      <h3 className="text-center d-block m-2 h3">Products</h3>
      <p className="text-center d-block mt-2 mb-5">
        Order it for you or for your beloved ones{" "}
      </p>
      <div
        className="products-cats-btn-holder btn-group col-12 row  my-3 "
        role="group"
        aria-label="Basic example"
      >
        <button
          className="btn products-category-btn  col-12 col-md-2"
          onClick={() => setCategory("men's clothing")}
          aria-pressed="false"
          data-bs-toggle="button"
        >
          Men clothing
        </button>
        <button
          className="btn products-category-btn  col-12 col-md-2"
          onClick={() => setCategory("women's clothing")}
          aria-pressed="false"
          data-bs-toggle="button"
        >
          Women clothing
        </button>
        <button
          className="btn products-category-btn  col-12 col-md-2 active"
          onClick={() => setCategory("all")}
          aria-pressed="true"
          data-bs-toggle="button"
        >
          All
        </button>

        <button
          className="btn products-category-btn  col-12 col-md-2"
          onClick={() => setCategory("jewelery")}
          data-bs-toggle="button"
          aria-pressed="false"
        >
          Jewelry
        </button>
        <button
          className="btn products-category-btn  col-12 col-md-2"
          onClick={() => setCategory("electronics")}
          aria-pressed="false"
          data-bs-toggle="button"
        >
          Electronics
        </button>
      </div>
      {/* <Product Data={Data}></Product> */}
      <div className="card-holder row justify-content-center  ">
        {category === "all"
          ? Data?.map((Data) => (
              <div
                className="container card border-1 m-2 p-2 d-flex col-5 col-lg-3 col-md-5"
                onMouseEnter={() =>
                  dispatch({ type: "item/select", payload: Data })
                }
              >
                <div className="image-wrapper">
                  <img
                    src={Data.image}
                    className="banner-image card-image-top border-0 h-"
                    alt="product"
                    onClick={() => productHandler(Data)}
                  />
                </div>
                <div className="wrapper row  flex-wrap pt-2 justify-content-center">
                  <p className="my-3 mx-1 col-12"> {Data.title}</p>
                  <p className=" h5 m-3 col-sm-6 align-self-center justify-self-center col-12 ">
                    {Data.price}$
                  </p>
                </div>
                <div className="button-wrapper m-0  align-self-end p-2 col-12  row ">
                  <button
                    className="btn products-category-btn col-12 col-sm-5"
                    onClick={() => productHandler(Data)}
                  >
                    Details
                  </button>
                  <button
                    className="btn products-category-btn col-12 col-sm-6  "
                    onClick={() => addHandler(Data)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          : Data.filter((Data) => Data.category === category).map((Data) => (
              <div
                className="container card border-1 m-2 p-2 d-flex col-5 col-lg-3 col-md-5"
                onMouseEnter={() =>
                  dispatch({ type: "item/select", payload: Data })
                }
              >
                <div className="image-wrapper">
                  <img
                    src={Data.image}
                    className="banner-image card-image-top border-0 h-"
                    alt="product"
                  />
                </div>
                <div className="wrapper row  flex-wrap pt-2 justify-content-center">
                  <p className="my-3 mx-1 col-12"> {Data.title}</p>
                  <p className=" h5 m-3 col-sm-6 align-self-center justify-self-center col-12 ">
                    {Data.price}$
                  </p>
                </div>
                <div className="button-wrapper m-0  align-self-end p-2 col-12  row ">
                  <button
                    className="btn products-category-btn col-12 col-sm-5"
                    onClick={() => productHandler(Data)}
                  >
                    Details
                  </button>
                  <button
                    className="btn products-category-btn col-12 col-sm-6  "
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
