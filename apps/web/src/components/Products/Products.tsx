import "./Products.css";

import ProductCard from "./ProductCard";

import products from "../../data/products";


function Products() {

  return (

    <section className="products">


      <div className="section-heading">

        <p>
          OUR COLLECTION
        </p>

        <h2>
          Latest Products
        </h2>

      </div>



      <div className="products-grid">

        {
          products.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))
        }

      </div>


    </section>

  );

}

export default Products;