import bagsImage from "../assets/bags.jpg";
import shoesImage from "../assets/shoes.jpg";
import clothingImage from "../assets/clothing.jpg";
import heroFashionImage from "../assets/hero-fashion.png";

const products = [
  {
    id: 1,
    name: "Classic Leather Bag",
    category: "Bags",
    price: "$120",
    image: bagsImage,
  },
  {
    id: 2,
    name: "Premium Running Shoes",
    category: "Shoes",
    price: "$95",
    image: shoesImage,
  },
  {
    id: 3,
    name: "Elegant Casual Shirt",
    category: "Clothing",
    price: "$60",
    image: clothingImage,
  },
  {
    id: 4,
    name: "Modern Fashion Jacket",
    category: "Clothing",
    price: "$150",
    image: heroFashionImage,
  },
];

export default products;