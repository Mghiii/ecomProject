// src/pages/ProductDetails.js
import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const ProductDetails = () => {
  const { productName } = useParams();
  const products = data.resources.flatMap((resource) => resource.items);
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="product-details">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Prix: {product.price} €</p>
    </div>
  );
};

export default ProductDetails;
