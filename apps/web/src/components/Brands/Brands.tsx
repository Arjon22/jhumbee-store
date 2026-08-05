import "./Brands.css";
import brands from "../../data/brands";

function Brands() {
  return (
    <section className="brands">

      <div className="section-heading">
        <p>
          OUR PARTNERS
        </p>

        <h2>
          Featured Brands
        </h2>
      </div>


      <div className="brands-grid">

        {
          brands.map((brand) => (
            <div 
              className="brand-card"
              key={brand}
            >
              {brand}
            </div>
          ))
        }

      </div>

    </section>
  );
}

export default Brands;