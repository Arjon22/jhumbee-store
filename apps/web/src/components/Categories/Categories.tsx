/* Jhumbee Quiet Atelier category cards: image-led entry points that hand off to the live collection filter. */
import clothingImage from "../../assets/clothing.jpg";
import shoesImage from "../../assets/shoes.jpg";
import bagsImage from "../../assets/bags.jpg";
import "./Categories.css";

const categories = [
  { title: "Clothing", image: clothingImage },
  { title: "Shoes", image: shoesImage },
  { title: "Bags", image: bagsImage },
];

function Categories() {
  const chooseCategory = (category: string) => {
    window.dispatchEvent(new CustomEvent("jhumbee:category", { detail: category }));
    document.querySelector("#shop")?.scrollIntoView({ behavior: "smooth" });
  };
  return <section className="categories">
    <div className="section-heading"><p>SHOP BY CATEGORY</p><h2>Find Your Perfect Style</h2></div>
    <div className="category-grid">{categories.map((category) => <button className="category-card" key={category.title} onClick={() => chooseCategory(category.title)} aria-label={`Explore ${category.title}`}><img src={category.image} alt={category.title} onError={(event) => { event.currentTarget.style.opacity = "0"; }} /><div className="category-overlay"><h3>{category.title}</h3><span>Explore <b aria-hidden="true">→</b></span></div></button>)}</div>
  </section>;
}
export default Categories;