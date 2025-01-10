import React, { useState, useEffect } from 'react';
import './blogs.css';
import imgBlog from '../assets/images/pubBlog.jpg';
import imageBlog1 from '../assets/blogResources/imageBlog1.jpg';
import imageBlog2 from '../assets/blogResources/imageBlog2.jpg';
import imageBlog3 from '../assets/blogResources/imageBlog3.jpg';
import imageBlog4 from '../assets/blogResources/imageBlog4.jpg';
import imageBlog5 from '../assets/blogResources/imageBlog5.png';
import imageBlog6 from '../assets/blogResources/imageBlog6.jpg';
import imageBlog7 from '../assets/blogResources/imageBlog7.jpg';
import imageBlog8 from '../assets/blogResources/imageBlog8.jpg';
import imageBlog9 from '../assets/blogResources/imageBlog9.jpg';

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Nombre d'éléments à afficher

  // Tableau des images
  const data = [
    { id: 1, img: imageBlog1 },
    { id: 2, img: imageBlog2 },
    { id: 3, img: imageBlog3 },
    { id: 4, img: imageBlog4 },
    { id: 5, img: imageBlog5 },
    { id: 6, img: imageBlog6 },
    { id: 7, img: imageBlog7 },
    { id: 8, img: imageBlog8 },
    { id: 9, img: imageBlog9 },
  ];

  // Détection de la largeur de l'écran
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth <= 700) {
        setItemsToShow(1);
      } else if (window.innerWidth <= 1100) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    // Mise à jour initiale
    updateItemsToShow();

    // Écouteur de redimensionnement
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  // Fonction pour afficher l'image suivante (boucle infinie)
  const nextImages = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length); // Repart à 0 après la dernière image
  };

  // Fonction pour afficher l'image précédente (boucle infinie)
  const prevImages = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length); // Repart à la fin après la première image
  };

  return (
    <div>
      <section className="sectionUne">
        <div className="desc1">
          <h1>
            Click<span>&</span>Buy Journal
          </h1>
          <p>Tendances et conseils sur les meilleurs téléphones et laptops.</p>
        </div>
        <div className="desc2">
          <div className="class1">
            <h1>
              Nos favoris de <span>2024</span>
            </h1>
            <p>
              Découvrez les meilleurs téléphones et laptops de l'année avec nos
              guides, comparatifs et conseils pour faire le bon choix.
            </p>
            <button>Lire la suite</button>
          </div>
          <div className="class2">
            <img src={imgBlog} alt="Image Blog" />
          </div>
        </div>
      </section>
      <section className="sectionDeux">
        <div className="image-container">
          {data.slice(currentIndex, currentIndex + itemsToShow).map((item) => (
            <div key={item.id} className="mapElems">
              <img src={item.img} alt={`Blog ${item.id}`} />
              <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                culpa odio accusamus sint? Placeat aliquam commodi maiores
                mollitia! Exercitationem labore provident ea deserunt unde ad
                iste,
              </p>
            </div>
          ))}
        </div>
        <div className="float">
          <button
            className="prev"
            onClick={prevImages}
            style={{ display: currentIndex === 0 ? 'none' : 'inline-block' }}
          >
            <i className="bi bi-chevron-double-left"></i>
          </button>
          <button
            className="suiv"
            onClick={nextImages}
            style={{
              display:
                currentIndex + itemsToShow >= data.length
                  ? 'none'
                  : 'inline-block',
            }}
          >
            <i className="bi bi-chevron-double-right"></i>
          </button>
        </div>
      </section>
    </div>
  );
}
