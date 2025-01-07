import React from 'react';
import './home.css';
import welcome from '../assets/images/welcome.jpg';
import imagePub2 from '../assets/images/image-pub2.png';
import imagePub1 from '../assets/images/phone-pub.jpg';
import iphone15 from '../assets/resources/iphone15.png';
import redmiNote13Pro from '../assets/resources/redmiNote13Pro.png';
import lenovoLegion from '../assets/resources/lenovo-legion.png';
import iphoneX from '../assets/resources/iphoneX.png';
import iphone12proMax from '../assets/resources/iphone12proMax.png';
import msiLap from '../assets/images/msiLap.png';
import iphoneBlog from '../assets/images/iphoneBlog.png';
import tuf1 from '../assets/images/tuf1.jpg';
import apple from '../assets/partenariat/apple.png';
import samsung from '../assets/partenariat/samsung.png';
import msi from '../assets/partenariat/msi.png';
import hp from '../assets/partenariat/hp.png';
import { Link } from 'react-router-dom';
import {
  overMouse,
  outMouse,
  overMouse2,
  outMouse2,
  overMouse3,
  outMouse3,
} from '../script.js';

export default function Home() {
  const handleOverMouse = () => {
    overMouse();
  };
  const handleOutMouse = () => {
    outMouse();
  };
  const handleOverMouse2 = () => {
    overMouse2();
  };
  const handleOutMouse2 = () => {
    outMouse2();
  };
  const handleOverMouse3 = () => {
    overMouse3();
  };
  const handleOutMouse3 = () => {
    outMouse3();
  };
  return (
    <div>
      <div className="content">
        <section className="section-une">
          <div className="image-pc">
            <img src={welcome} alt="" />
          </div>
          <div className="texButt">
            <div className="texts">
              <h1 className="title">
                Découvrez la <span>Technologie </span>de pointe
              </h1>
              <p className="description">
                Plongez dans l'univers des laptops et téléphones de dernière
                génération, conçus pour vous offrir une performance
                exceptionnelle et un design élégant.
              </p>
            </div>
            <div className="buttons">
              <button className="exp">Explorer plus</button>
              <button className="sav">En savoir plus</button>
            </div>
          </div>
        </section>
        <section className="section-deux">
          <div className="image-pub">
            <img src={imagePub1} alt="" />
          </div>
          <div className="desc-content">
            <div className="titDesc">
              <h1>
                Découvrez <span>l’Innovation</span> à Portée de Main
              </h1>
              <p>
                Explorez des appareils de dernière génération, alliant
                performance et élégance, pour les passionnés de technologie et
                les amateurs de gadgets.
              </p>
            </div>
            <div className="button-group">
              <button className="learn-button">Plus de Détails ici</button>
              <button className="explore-button">Voir les produits</button>
            </div>
          </div>
        </section>
        <section className="section-trois">
          <div className="desc-content-2">
            <h1>
              Trouvez Votre <span>Smartphone</span> et <span>Laptop</span> Idéal
            </h1>
            <p>
              Découvrez une sélection exceptionnelle de téléphones et
              ordinateurs portables, alliant performance, design et prix
              compétitifs. Que vous cherchiez un outil professionnel ou un
              appareil pour votre quotidien, nous avons ce qu’il vous faut pour
              répondre à vos besoins.
            </p>
            <a href="../products/products.html">Voir Plus De Produit Ici</a>
          </div>
          <div className="image-pub-2">
            <img src={imagePub2} alt="" />
          </div>
        </section>
        <section className="section-quatre">
          <div className="productSection">
            <div className="titleProd">
              <h1>Parcourez des articles extraordinaires à prix spécial </h1>
            </div>
            <div className="products-wrapper ">
              <div className="products">
                <Link to="/products" className="linklProducts">
                  <div className="product1">
                    <img src={iphone15} alt="" />
                    <p>
                      Iphone 15 Disponible <br /> jusqu'a -20%
                    </p>
                  </div>
                </Link>
                <Link to="/products" className="linklProducts">
                  <div className="product1">
                    <img src={iphoneX} alt="" />
                    <p>
                      Iphone X Disponible <br /> jusqu'a -30%
                    </p>
                  </div>
                </Link>
                <Link to="/products" className="linklProducts">
                  <div className="product1">
                    <img src={lenovoLegion} alt="" />
                    <p>
                      Lenovo Legion 15 Disponible <br /> jusqu'a -40%
                    </p>
                  </div>
                </Link>
                <Link to="/products" className="linklProducts">
                  <div className="product1">
                    <img src={iphone12proMax} alt="" />
                    <p>
                      Iphone 12 Pro Max Disponible <br /> jusqu'a -20%
                    </p>
                  </div>
                </Link>
                <Link to="/products" className="linklProducts">
                  <div className="product1">
                    <img src={redmiNote13Pro} alt="" />
                    <p>
                      Redmi Note 13 Pro Disponible <br /> jusqu'a -15%
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="section-cinq">
          <div className="titreBlog">
            <Link to="/blogs">
              <h1>
                Récemment publié sur le blog <i class="bi bi-arrow-right"></i>
              </h1>
            </Link>
          </div>
          <div className="cc">
            <div className="contentBlog">
              <div className="cardsBlog">
                <img
                  src={msiLap}
                  id="msiLap"
                  onMouseOver={handleOverMouse}
                  onMouseOut={handleOutMouse}
                  alt=""
                />
              </div>
              <Link to="/blogs" className="linkBlogs">
                <div className="descCart">
                  <p>Inspiration</p>
                  <h2>Nos favoris de 2024</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi quibusdam sed voluptates veniam. Repellat libero odit
                    ipsum amet cumque vel et? Eveniet vero, rem itaque hic id
                    veniam cum. Quo!
                  </p>
                </div>
              </Link>
            </div>

            <div className="contentBlog">
              <div className="cardsBlog">
                <img
                  src={iphoneBlog}
                  id="iphone"
                  onMouseOver={handleOverMouse3}
                  onMouseOut={handleOutMouse3}
                  alt=""
                />
              </div>
              <Link to="/blogs" className="linkBlogs">
                <div className="descCart">
                  <p>Inspiration</p>
                  <h2>
                    5 articles présentés aux C&B qui ont conquis nos cœurs
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi quibusdam sed voluptates veniam. Repellat libero odit
                    ipsum amet cumque vel et? Eveniet vero, rem itaque hic id
                    veniam cum. Quo!
                  </p>
                </div>
              </Link>
            </div>

            <div className="contentBlog">
              <div className="cardsBlog">
                <img
                  src={tuf1}
                  id="tuf"
                  onMouseOver={handleOverMouse2}
                  onMouseOut={handleOutMouse2}
                  alt=""
                />
              </div>
              <Link to="/blogs" className="linkBlogs">
                <div className="descCart">
                  <p>Inspiration</p>
                  <h2>
                    5 astuces pour trouver des cadeaux à la dernière minute
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi quibusdam sed voluptates veniam. Repellat libero odit
                    ipsum amet cumque vel et? Eveniet vero, rem itaque hic id
                    veniam cum. Quo!
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="sectionSix">
          <div className="descPartenariat">
            <h2>
              Nous travaillons avec les
              <span> Meilleurs Partenariat</span>
            </h2>
            <p>
              Bien que nous soyons à l'avant-garde et que nous nous
              spécialisions dans la conception-construction, nous connaissons
              très bien un certain nombre de méthodes de livraison et sommes
              convaincus que nous pouvons trouver le processus qui vous aidera
              le mieux à atteindre vos objectifs.
            </p>
            <button>LIRE LA SUITE</button>
          </div>
          <div className="imgPartenatiat">
            <img src={apple} alt="" id="apple" />
            <img src={hp} alt="" id="hp" />
            <img src={msi} alt="" id="msi" />
            <img src={samsung} alt="" id="samsung" />
          </div>
        </section>
      </div>
    </div>
  );
}
