import { useData } from "../context/DataContext";

function Popular() {
  const { Data } = useData();
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
  const sortedByRate = Data?.slice().sort(compsByRate);
  sortedByRate?.splice(4);
  // Data.rating.rate.sort((a,b)=>a-b)
  return (
    <section className="popular py-5">
      <div className="popular-text ">
        <p className="h3">Popular</p>
        <br />
        <p className="h5">Our top selling product that you may like</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quidem
          quaerat nesciunt, dignissimos architecto porro tempore animi, non
          laudantium iste culpa necessitatibus? Deserunt excepturi harum
          molestiae incidunt, dignissimos nostrum magni.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          dolorem enim, in, accusantium ad eius culpa doloremque necessitatibus
          assumenda magni tempora aut praesentium esse aliquid commodi! Ab
          incidunt laboriosam saepe.
        </p>
      </div>
      <div className="card-holder row row-cols-4 flex-wrap justify-content-center  p-3">
        {sortedByRate?.map((Data) => (
          <div
            className="container card border-1 m-2 p-2 d-flex col-5 col-lg-2 col-md-5"
            key={Data.id}
          >
            <img
              src={Data.image}
              className="banner-image card-image-top border-0 h-50"
              alt="product"
            />
            <div className="wrapper row  flex-wrap pt-2 justify-content-center">
              <p className="mt-3  col-12"> {Data.title}</p>
              <p className=" h5 col-sm-6 text-center  col-12 mt-3 ">
                {Data.price}$
              </p>
              <p className="text-center h5 col-12 col-sm-6 mt-3">
                {Data.rating.rate}⭐
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Popular;
