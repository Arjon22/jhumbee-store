import "./Products.css";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <h3>
          {product.name}
        </h3>

        <div className="product-bottom">

          <span>
            {product.price}
          </span>

          <button>
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;