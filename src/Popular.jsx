import Product from "./Product";
function Popular({ Data }) {
  const compsByRate = (a, b) => {
    const rateA = a.rating.rate;
    const rateB = b.rating.rate;
    if (rateB < rateA) {
      return -1;
    }
    if (rateB > rateA) {
      return 1;
    }
    return 0;
  };
  console.log(Data);
  const sortedByRate = Data.slice().sort(compsByRate);
  sortedByRate.splice(4);
  // Data.rating.rate.sort((a,b)=>a-b)
  return (
    <section className="popular py-5">
      <div className="popular-text">
        <p className="h3">Popular</p>
        <br />
        <p className="h5">Our top selling product that you may like</p>
      </div>
      <div className="card-holder row row-cols-4 flex-wrap justify-content-center  p-3">
        {sortedByRate.map((Data) => (
          <div class="container card border-1 m-2 p-2 d-flex position-realtive ">
            <img
              src={Data.image}
              class="banner-image card-image-top border-0 h-50"
              alt="product"
            />
            <div class="wrapper justify-content-center h-50 align-self-end p-2 row position-absolute bottom-0 start-50 translate-middle-x w-100 align-items-center">
              <p className="col-12"> {Data.title}</p>
              <br />
              <p className="text-start h5 col-5">{Data.rating.rate}⭐</p>
              <p className="text-end h5 col-5">{Data.price}$
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;
