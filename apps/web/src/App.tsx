import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Features from "./components/Features/Features";
import Brands from "./components/Brands/Brands";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Navbar />
<Categories />
<Products />
<Features />
<Brands />
<Testimonials />
<Newsletter />
    </>
  );
}

export default App;