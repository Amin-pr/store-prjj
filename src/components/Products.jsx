import { useState } from "react";
import "./app.css";
import { useData } from "../context/DataContext";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
        Order it for you or for your beloved ones <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est maxime
        at obcaecati fuga eligendi esse dolorum illum ullam quisquam unde eum
        eveniet totam laboriosam architecto, placeat, dolores iste maiores.
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
                key={Data.id}
              >
                <div className="image-wrapper">
                  <img
                    src={Data.image}
                    className="banner-image card-image-top border-0 "
                    alt="product"
                    onClick={() => navigate(`${Data.id}`)}
                  />
                </div>
                <div className="wrapper row  flex-wrap pt-2 justify-content-center">
                  <p className="my-3 mx-1 col-12"> {Data.title}</p>
                  <p className=" h5 m-3 col-sm-6 align-self-center justify-self-center col-12 ">
                    {Data.price}$
                  </p>
                </div>
                <div className="button-wrapper m-0  align-self-end p-2 col-12  row ">
                  <Link
                    to={`${Data.id}`}
                    className="btn products-category-btn col-12 col-sm-5"
                    onClick={() => navigate(`${Data.id}`)}
                  >
                    {/* <button
                    className="btn products-category-btn col-12 col-sm-5"
                    onClick={() => productHandler(Data)}
                    > */}
                    Details
                    {/* </button> */}
                  </Link>
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
                key={Data.id}
              >
                <div className="image-wrapper">
                  <img
                    src={Data.image}
                    className="banner-image card-image-top border-0 "
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
                  <Link
                    to={`${Data.id}`}
                    className="btn products-category-btn col-12 col-sm-5"
                    // onClick={() => productHandler(Data)}
                  >
                    {/* <button
                    className="btn products-category-btn col-12 col-sm-5"
                    onClick={() => productHandler(Data)}
                    > */}
                    Details
                    {/* </button> */}
                  </Link>
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
