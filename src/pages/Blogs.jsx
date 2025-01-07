import React from 'react';
import './blogs.css';
import imgBlog from '../assets/images/pubBlog.jpg';
import imageBlog1 from '../assets/blogResources/imageBlog1.jpg';
import imageBlog2 from '../assets/blogResources/imageBlog2.jpg';
import imageBlog4 from '../assets/blogResources/imageBlog4.jpg';
import imageBlog5 from '../assets/blogResources/imageBlog5.png';
import imageBlog6 from '../assets/blogResources/imageBlog6.jpg';
import imageBlog7 from '../assets/blogResources/imageBlog7.jpg';
import imageBlog8 from '../assets/blogResources/imageBlog8.jpg';

export default function Blogs() {
  const data = [
    { id: 1, name: 'imageBlog1', img: '/blogResources/imageBlog1.jpg' },
    { id: 2, name: 'imageBlog2', img: '/blogResources/imageBlog2.jpg' },
    { id: 4, name: 'imageBlog4', img: '/blogResources/imageBlog4.jpg' },
    { id: 5, name: 'imageBlog5', img: '/blogResources/imageBlog5.png' },
    { id: 6, name: 'imageBlog6', img: '/blogResources/imageBlog6.jpg' },
    { id: 7, name: 'imageBlog7', img: '/blogResources/imageBlog7.jpg' },
    { id: 8, name: 'imageBlog8', img: '/blogResources/imageBlog8.jpg' },
  ];

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
        <img src={imageBlog1} />
      </section>
    </div>
  );
}
