import "./Testimonials.css";
import testimonials from "../../data/testimonials";


function Testimonials() {

  return (

    <section className="testimonials">


      <div className="section-heading">

        <p>
          CUSTOMER LOVE
        </p>

        <h2>
          What Our Customers Say
        </h2>

      </div>



      <div className="testimonial-grid">

        {
          testimonials.map((item) => (

            <div 
              className="testimonial-card"
              key={item.name}
            >

              <div className="stars">
                {"★".repeat(item.rating)}
              </div>


              <p className="review">
                {item.review}
              </p>


              <h3>
                {item.name}
              </h3>


              <span>
                {item.role}
              </span>


            </div>

          ))
        }

      </div>


    </section>

  );

}

export default Testimonials;