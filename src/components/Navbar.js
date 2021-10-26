import React, { useState } from "react";
import "./style/navbar.css";
import mainLogo from "../assets/images/mainLogo.png";
import imgSearch from "../assets/images/icon-search.png";
import imgUser from "../assets/images/icon-user.png";
import imgShop from "../assets/images/icon-shopping-cart.png";
import Hamburger from "hamburger-react";



const Navbar = ({cartItems}) => {
  const [isActive, setActive] = useState(false);

  const Condition = () => {
    if (isActive) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="container-menu">
      <a className="navbar-logo" href="/">
        <img className="logo-menu" alt="main logo" src={mainLogo} />
      </a>
      <Hamburger
        onToggle={() => setActive(Condition)}
        className="hambutton"
        color="#ff8f15"
        size={50}
      />
      <nav>
        <ul className={isActive ? "container-menu nav ul" : "navbar-options li"}>
          <li>
            <a href="#">Ocassions</a>
          </li>
          <li>
            <a href="#">All Categories</a>
          </li>
          <li>
            <a href="#">Gifts</a>
          </li>
          <li>
            <a href="#">Specials</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">
              <img className="img-search" alt="img search" src={imgSearch} />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="img-user" alt="img user" src={imgUser} />
            </a>
          </li>
          <li>
            <a href="#">
              <img className= "img-shop" alt="img shop" src={imgShop} />
              {cartItems !==0 && (
              <p className= "p-shop">{cartItems}</p>)}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};



export default Navbar 

