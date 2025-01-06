import React from 'react';
import './footer.css';
import facebook from '../assets/social/icons8-facebook-nouveau-48.png';
import instagram from '../assets/social/icons8-instagram-48.png';
import x from '../assets/social/icons8-x-48.png';
import gmail from '../assets/social/icons8-gmail-nouveau-48.png';
import github from '../assets/social/icons8-github-48.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="divGlobal">
        <div className="part1">
          <h1>
            Click<span>&</span>Buy
          </h1>
          <p>Confidentialité</p>
          <p>Politique</p>
        </div>
        <div className="part2">
          <div className="social">
            <img src={facebook} alt="" />
            <img src={x} alt="" />
            <img src={github} alt="" />
            <img src={instagram} alt="" />
            <img src={gmail} alt="" />
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Products">Produits</Link>
            <Link to="blogs">Blogs</Link>
            <Link to="/about">A propose</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>
          &copy; Copyright <span>Polytechnique</span> 2025. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
