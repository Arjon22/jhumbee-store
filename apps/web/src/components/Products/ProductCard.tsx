/* Jhumbee Quiet Atelier product card: editorial image first, concise commerce action second. */
import "./Products.css";

interface Product { id: number; name: string; category: string; price: string; image: string; }
interface ProductCardProps { product: Product; }

function ProductCard({ product }: ProductCardProps) {
  const addToCart = () => window.dispatchEvent(new CustomEvent("jhumbee:add-to-cart", { detail: product }));
  return <article className="product-card">
    <div className="product-image"><img src={product.image} alt={product.name} /><button className="product-save" aria-label={`Save ${product.name}`}>♡</button><span className="product-badge">Considered edit</span></div>
    <div className="product-info"><p className="product-category">{product.category}</p><h3>{product.name}</h3><div className="product-bottom"><span>{product.price}</span><button onClick={addToCart}>Add to bag <span aria-hidden="true">→</span></button></div></div>
  </article>;
}

export default ProductCard;