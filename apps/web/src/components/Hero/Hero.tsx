import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hero-tag">
          NEW COLLECTION
        </p>

        <h1>
          Elevate Your
          <br />
          Everyday Style
        </h1>

        <p className="hero-description">
          Discover timeless clothing, shoes, and bags
          designed for modern elegance.
        </p>

        <button className="hero-button">
          Shop Collection
        </button>

      </div>


      <div className="hero-image">

        <img
          src="/hero-fashion.png"
          alt="Fashion collection"
        />

      </div>

    </section>
  );
}

export default Hero;