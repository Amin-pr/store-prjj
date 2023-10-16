import Product from "./Product"
function Popular() {
    return(
        <section className="popular text-center row justify-content-center">
            <div className="popular-text">
                <p className="h3">Popular</p>
                <p className="h5">Our top selling product that you may like</p>
            </div>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </section>
    )
}

export default Popular