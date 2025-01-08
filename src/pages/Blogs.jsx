import React, { useState } from 'react';
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

  const nextImages = () => {
    if (currentIndex + 3 < data.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  // Fonction pour afficher les images précédentes
  const prevImages = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
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
          {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <img
              key={index}
              src={item.img}
              alt={`Blog ${item.id}`} 
              width="550px"
              height="400px"
            />
          ))}
        </div>

        <button
          onClick={prevImages}
          id="prev"
          style={{ display: currentIndex === 0 ? 'none' : 'inline-block' }}
        >
          Précédent
        </button>
        <button
          onClick={nextImages}
          id="suiv"
          style={{
            display: currentIndex + 3 >= data.length ? 'none' : 'inline-block',
          }}
        >
          Suivant
        </button>
      </section>
    </div>
  );
}
