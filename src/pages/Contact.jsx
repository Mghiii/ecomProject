import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div>
      <div className="total">
        <section className="form">
          <form>
            <h1 className="title">
              Contactez-<span>Nous</span>
            </h1>
            <div className="formContent">
              <div className="mailName">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Entrer votre Email"
                />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Entrer votre Nom"
                />
              </div>
              <div className="adresse">
                <input
                  type="text"
                  name="ad"
                  id="ad"
                  placeholder="Entrer votre Adresse"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Entrer votre Message"
                ></textarea>
              </div>
              <div className="btn">
                <button className="soumettre">SOUMETTRE</button>
              </div>
            </div>
          </form>
        </section>
        <sectios className="info">
          <div className="pr">
            <i class="bi bi-telephone-fill"></i>
            <h1>numéro de téléphone</h1>
            <p>
              +212-66949-8007 <br />
              +212-68984-1509 (sans frais){' '}
            </p>
          </div>
          <div className="dm">
            <i class="bi bi-geo-alt"></i>
            <h1>notre bureau principal</h1>
            <p>
              Universiapolis <br /> Université Internationale d'Agadir
            </p>
          </div>
          <div className="tr">
            <i class="bi bi-printer"></i>
            <h1>Fax</h1>
            <p>212-50000-0000</p>
          </div>
          <div className="qr">
            <i class="bi bi-envelope-at-fill"></i>
            <h1>E-mail</h1>
            <p>polytechnique@e-polytechnique.ma</p>
          </div>
        </sectios>
      </div>
    </div>
  );
}
