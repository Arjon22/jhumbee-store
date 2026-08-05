import "./Categories.css";

function Categories() {
  const categories = [
    {
      title: "Clothing",
      image: "/clothing.jpg",
    },
    {
      title: "Shoes",
      image: "/shoes.jpg",
    },
    {
      title: "Bags",
      image: "/bags.jpg",
    },
  ];

  return (
    <section className="categories">

      <div className="section-heading">
        <p>SHOP BY CATEGORY</p>
        <h2>Find Your Perfect Style</h2>
      </div>


      <div className="category-grid">

        {categories.map((category) => (
          <div className="category-card" key={category.title}>

            <img 
              src={category.image}
              alt={category.title}
            />

            <div className="category-overlay">
              <h3>{category.title}</h3>
              <button>
                Explore
              </button>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Categories;