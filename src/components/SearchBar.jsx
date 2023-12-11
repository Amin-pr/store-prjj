function SearchBar(Data) {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={Data.image} className="banner-image" alt="product">
          {" "}
        </img>
        <h1> {Data.title}</h1>
        <p>{Data.descriptio}</p>
      </div>
      <div className="button-wrapper">
        <button
          className="btn outline"
          onClick={() => productHandler(Data)}
          onMouseEnter={() => setProductInfo(Data)}
        >
          DETAILS
        </button>
        <button className="btn fill" onClick={() => addHandler(Data)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
