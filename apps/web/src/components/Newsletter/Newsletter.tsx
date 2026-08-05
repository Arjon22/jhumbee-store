import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-content">

        <p className="newsletter-tag">
          STAY UPDATED
        </p>

        <h2>
          Join Our Fashion Community
        </h2>

        <p className="newsletter-text">
          Subscribe to get updates about new collections,
          exclusive offers, and latest fashion trends.
        </p>


        <form className="newsletter-form">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}

export default Newsletter;