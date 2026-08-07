import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Features from "./components/Features/Features";
import Brands from "./components/Brands/Brands";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Categories from "./components/Categories/Categories";

/* Jhumbee Quiet Atelier composition: one deliberate editorial journey with direct menu landmarks. */
function App() {
  return (
    <main>
      <div id="home"><Navbar /><Hero /></div>
      <section id="categories"><Categories /></section>
      <section id="shop"><Products /></section>
      <section id="story"><Features /></section>
      <Brands />
      <Testimonials />
      <section id="contact"><Newsletter /></section>
      <footer className="brand-footer"><div><strong>jhumbee<span /></strong><p>Considered pieces for ordinary days.</p></div><div className="footer-links"><a href="#shop">Shop the edit</a><a href="#story">Our story</a><a href="#contact">Contact</a></div><small>© 2026 Jhumbee Studio</small></footer>
    </main>
  );
}

export default App;
