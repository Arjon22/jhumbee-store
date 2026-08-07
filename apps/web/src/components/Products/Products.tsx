/* Jhumbee Quiet Atelier collection: calm editorial filtering, never a noisy marketplace grid. */
import { useEffect, useMemo, useState } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import products from "../../data/products";

function Products() {
  const [activeCategory, setActiveCategory] = useState("All pieces");
  const [query, setQuery] = useState("");
  const categories = ["All pieces", "Clothing", "Shoes", "Bags"];
  useEffect(() => {
    const onSearch = (event: Event) => { setQuery(String((event as CustomEvent).detail || "")); setActiveCategory("All pieces"); };
    window.addEventListener("jhumbee:search", onSearch);
    return () => window.removeEventListener("jhumbee:search", onSearch);
  }, []);
  const visibleProducts = useMemo(() => products.filter((product) => (activeCategory === "All pieces" || product.category === activeCategory) && `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())), [activeCategory, query]);
  return <section className="products">
    <div className="collection-intro"><div className="section-heading"><p>THE JHUMBEE EDIT / 01</p><h2>Pieces with a<br /><em>longer life.</em></h2></div><p className="collection-copy">A small, considered collection of clothing, shoes, and bags chosen for the everyday rhythm.</p></div>
    <div className="collection-toolbar"><div className="category-chips">{categories.map((category) => <button key={category} className={activeCategory === category ? "active" : ""} onClick={() => setActiveCategory(category)}>{category}</button>)}</div><span>{visibleProducts.length} pieces</span></div>
    {visibleProducts.length ? <div className="products-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-collection">No pieces match that search yet. Try another word.</div>}
  </section>;
}
export default Products;