import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Product.css";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.title}</p>
      <p>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
