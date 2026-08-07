/* Jhumbee Quiet Atelier category cards: image-led entry points that hand off to the live collection filter. */
import "./Categories.css";

const categories = [
  { title: "Clothing", image: "clothing.jpg" },
  { title: "Shoes", image: "shoes.jpg" },
  { title: "Bags", image: "bags.jpg" },
];

function Categories() {
  const chooseCategory = (category: string) => {
    window.dispatchEvent(new CustomEvent("jhumbee:category", { detail: category }));
    document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
  };
  return <section className="categories">
    <div className="section-heading"><p>SHOP BY CATEGORY</p><h2>Find Your Perfect Style</h2></div>
    <div className="category-grid">{categories.map((category) => <button className="category-card" key={category.title} onClick={() => chooseCategory(category.title)} aria-label={`Explore ${category.title}`}><img src={`${import.meta.env.BASE_URL}${category.image}`} alt={category.title} onError={(event) => { event.currentTarget.style.opacity = "0"; }} /><div className="category-overlay"><h3>{category.title}</h3><span>Explore <b aria-hidden="true">→</b></span></div></button>)}</div>
  </section>;
}
export default Categories;