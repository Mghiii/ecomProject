import React from 'react';
import './home.css';
import welcome from '../assets/images/welcome.jpg';
import imagePub2 from '../assets/images/image-pub2.png';
import imagePub1 from '../assets/images/phone-pub.jpg';

export default function Home() {
  return (
    <div>
      <div class="content">
        <section class="section-une">
          <div class="image-pc">
            <img src={welcome} alt="" />
          </div>
          <div class="texButt">
            <div class="texts">
              <h1 class="title">
                Découvrez la <span>Technologie </span>de pointe
              </h1>
              <p class="description">
                Plongez dans l'univers des laptops et téléphones de dernière
                génération, conçus pour vous offrir une performance
                exceptionnelle et un design élégant.
              </p>
            </div>
            <div class="buttons">
              <button class="exp">Explorer plus</button>
              <button class="sav">En savoir plus</button>
            </div>
          </div>
        </section>

        <section class="section-deux">
          <div class="image-pub">
            <img src={imagePub1} alt="" />
          </div>
          <div class="desc-content">
            <div class="titDesc">
              <h1>
                Découvrez <span>l’Innovation</span> à Portée de Main
              </h1>
              <p>
                Explorez des appareils de dernière génération, alliant
                performance et élégance, pour les passionnés de technologie et
                les amateurs de gadgets.
              </p>
            </div>
            <div class="button-group">
              <button class="learn-button">Plus de Détails ici</button>
              <button class="explore-button">Voir les produits</button>
            </div>
          </div>
        </section>
        <section class="section-trois">
          <div class="desc-content-2">
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
          <div class="image-pub-2">
            <img src={imagePub2} alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
