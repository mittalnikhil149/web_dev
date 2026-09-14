import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Product() {
  const { pid } = useParams();
  const navigate = useNavigate();
  const [productId, setProductId] = React.useState(pid ?? "");
  let productName;
  let price;

  function onSearch(event) {
    event.preventDefault();
    if (productId.trim()) {
      navigate(`/product/${productId.trim()}`);
    }
  }

  switch (pid) {
    case "1":
      productName = "Laptop";
      price = "$800";
      break;
    case "2":
      productName = "Smartphone";
      price = "$500";
      break;
    case "3":
      productName = "Headphones";
      price = "$100";
      break;
    default:
      productName = "Product not found";
      price = "-";
  }

  return (
    <div className="product-page">
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={productId}
          onChange={(event) => setProductId(event.target.value)}
          placeholder="Enter product ID"
          aria-label="Product ID"
        />
        <button type="submit">Search</button>
      </form>

      <h2>Product ID: {pid}</h2>
      <p>Product: {productName}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default Product;