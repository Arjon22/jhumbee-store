import "./Features.css";
import features from "../../data/features";


function Features() {

  return (

    <section className="features">

      <div className="section-heading">

        <p>
          WHY JHUMBEE
        </p>

        <h2>
          Designed For A Better Shopping Experience
        </h2>

      </div>


      <div className="features-grid">

        {
          features.map((feature) => (

            <div 
              className="feature-card"
              key={feature.title}
            >

              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>

          ))
        }

      </div>

    </section>

  );
}

export default Features;