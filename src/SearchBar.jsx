function SearchBar(Data) {
  return (
    <div class="container">
      <div class="wrapper">
        <img src={Data.image} class="banner-image" alt="product">
          {" "}
        </img>
        <h1> {Data.title}</h1>
        <p>{Data.descriptio}</p>
      </div>
      <div class="button-wrapper">
        <button
          class="btn outline"
          onClick={() => productHandler(Data)}
          onMouseEnter={() => setProductInfo(Data)}
        >
          DETAILS
        </button>
        <button class="btn fill" onClick={() => addHandler(Data)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default SearchBar;
