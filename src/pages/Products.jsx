import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importer Link
import data from "../data.json";
import "./products.css";

export default function Products() {
  const [productsByCategory, setProductsByCategory] = useState({});
  const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche
  const [filteredProducts, setFilteredProducts] = useState({}); // État pour les produits filtrés

  useEffect(() => {
    const groupedProducts = data.resources.reduce((acc, resource) => {
      acc[resource.category] = resource.items;
      return acc;
    }, {});
    setProductsByCategory(groupedProducts);
    setFilteredProducts(groupedProducts); // Initialiser les produits filtrés
  }, []);

  const handleSearch = () => {
    const newFilteredProducts = {};
    Object.keys(productsByCategory).forEach((category) => {
      newFilteredProducts[category] = productsByCategory[category].filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredProducts(newFilteredProducts); // Mettre à jour les produits filtrés
  };

  return (
    <div className="alll">
      <div className="introduction">
        <h1>
          Bienvenue chez{" "}
          <span>
            C<span>&</span>B
          </span>{" "}
          Store
        </h1>
        <p>
          Explorez notre sélection de produits de qualité, allant des gadgets
          technologiques aux articles de mode. Cliquez sur chaque produit pour
          en savoir plus !
        </p>
        <br />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>

      <div className="product-list">
        {Object.keys(filteredProducts).map((category) => (
          <div key={category} className="category-section">
            <h2 className="cat">{category} :</h2>
            <div className="productss">
              {filteredProducts[category].map((product, index) => (
                <div key={index} className="product-card">
                  <Link to={`/products/${encodeURIComponent(product.name)}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="imgpp"
                    />
                    <h3 className="ttlpro">{product.name}</h3>
                    <p className="descpro">{product.description}</p>
                    <p className="prixpro">Prix: {product.price} €</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
