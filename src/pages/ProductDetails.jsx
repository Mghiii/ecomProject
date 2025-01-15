import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import "./prodDetails.css";

const ProductDetails = () => {
  const { productName } = useParams();
  const products = data.resources.flatMap((resource) => resource.items);
  const product = products.find((p) => p.name === productName);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  return (
    <div className="ps">
      <h1>Detail du Produit</h1>
      <div className="product-details">
        <div className="prodImg">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="descProd">
          <div className="contProd">
            <h1>{product.name}</h1>
            <p className="ppp">{product.description}</p>
            <p className="pprix">Prix: {product.price} DH</p>
          </div>
          <div className="btnProd">
            <button className="ajout">Ajouter au panier</button>
            <button className="achet">Acheter maintenant</button>
            <button className="back">Retour au page des produits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
