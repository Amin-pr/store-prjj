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
  const sortedByRate = Data.sort(compsByRate);
  // Data.rating.rate.sort((a,b)=>a-b)
  return (
    <section className="popular text-center row justify-content-center">
      <div className="popular-text">
        <p className="h3">Popular</p>
        <p className="h5">Our top selling product that you may like</p>
      </div>
      {sortedByRate.map((Data) => (
        <div class="container mx-2 my-4 ">
          <img src={Data.image} class="banner-image" alt="product" />
          <div class="wrapper">
            <h5> {Data.title}</h5>
            <p style={{ fontSize: 14 }}>{Data.price}</p>
            <p>{Data.rating.rate}⭐</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Popular;
