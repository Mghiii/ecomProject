import React, { useState } from 'react'; // Importez useState
import './navbar.css'; // Ajoutez votre fichier CSS
import logo from '../../assets/images/logo.png';
import product1 from '../../assets/products/asusGammingLap1.png';
import product2 from '../../assets/products/asusLap1.png';
import product3 from '../../assets/products/iphone13.png';
import { Link, NavLink } from 'react-router-dom';
import { toggleMenu, toggleSubMenu, toggleDropMenu } from '../../script'; // Importez les fonctions

const Navbar = () => {
  const [subMenuOpen, setSubMenuOpen] = useState(false); // Ajouter état pour le sous-menu
  const [dropMenuOpen, setDropMenuOpen] = useState(false); // Ajouter état pour le menu déroulant 2

  // Gérer l'ouverture/fermeture du sous-menu
  const handleSubMenuToggle = () => {
    setSubMenuOpen(!subMenuOpen);
    toggleSubMenu();
  };

  // Gérer l'ouverture/fermeture du menu déroulant 2
  const handleDropMenuToggle = () => {
    setDropMenuOpen(!dropMenuOpen);
    toggleDropMenu();
  };

  // Gérer l'ouverture/fermeture du menu principal
  const handleMenuToggle = () => {
    toggleMenu();
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="LOGO" className="logo-image" height="60" />
          </Link>
        </div>
        <div className="links-middle">
          <ul id="menuList" style={{ maxHeight: '0px' }}>
            <li>
              <NavLink
                to="/"
                className="nav-links"
                id="link1"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="nav-links"
                id="link2"
                activeClassName="active"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className="nav-links"
                id="link3"
                activeClassName="active"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="nav-links"
                id="link4"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-links"
                id="link5"
                activeClassName="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="avatar-links">
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
            className="avatar"
            height="40"
            alt="User Avatar"
            onClick={handleSubMenuToggle} // Utilisez handleSubMenuToggle
          />
          <i
            className="bi bi-cart-dash-fill"
            onClick={handleDropMenuToggle}
          ></i>
          {/* Utilisez handleDropMenuToggle */}
          <i className="bi bi-list" onClick={handleMenuToggle}></i>
          {/* Utilisez handleMenuToggle */}
        </div>
        {/* Dropdown 1 */}
        <div
          className={`sub-menu-wrap ${subMenuOpen ? 'open-class' : ''}`}
          id="sub-menu-wrap"
        >
          <div className="sub-menu">
            <table className="table">
              <tr className="table-links">
                <td className="img-td">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                    className="avatar"
                    height="40"
                    alt="User Avatar"
                  />
                </td>
                <td>
                  <Link to="#">User Profile</Link>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr />
                </td>
              </tr>
              <tr className="table-links">
                <td>
                  <i className="bi bi-gear-fill"></i>
                </td>
                <td>
                  <Link to="#">Settings</Link>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr />
                </td>
              </tr>
              <tr className="table-links">
                <td>
                  <i className="bi bi-person-circle"></i>
                </td>
                <td>
                  <Link to="#">Disconnect</Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
        {/* Dropdown 2 */}
        <div
          className={`sub-menu-wrap-two ${
            dropMenuOpen ? 'open-class-two' : ''
          }`}
          id="sub-menu-wrap-two"
        >
          <div className="sub-menu-two">
            <table className="table-drop-two">
              <tr>
                <td>
                  <img src={product1} height="50" alt="Product 1" />
                </td>
                <td>
                  <p>
                    <span style={{ fontWeight: '600' }}>Prix :</span> 7 000 DH
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr className="hr-hr" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={product2} height="50" alt="Product 2" />
                </td>
                <td>
                  <p>
                    <span style={{ fontWeight: '600' }}>Prix :</span> 7 000 DH
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr className="hr-hr" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={product3} height="50" alt="Product 3" />
                </td>
                <td>
                  <p>
                    <span style={{ fontWeight: '600' }}>Prix :</span> 7 000 DH
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr className="hr-hr" />
                </td>
              </tr>
              <tr>
                <td>
                  <p>
                    <span style={{ fontWeight: '600' }}>Total </span>
                  </p>
                </td>
                <td>
                  <p style={{ color: '#2cc29c', fontWeight: '700' }}>
                    23 000.00 DH
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <hr className="hr-hr" />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <Link to="#" className="voir-cart">
                    Voir tout
                  </Link>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
