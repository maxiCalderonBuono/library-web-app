import React, { useState } from "react";
import "./style/navbar.css";

import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";
import { Cart3 } from "@styled-icons/bootstrap/Cart3";
import { Person } from "@styled-icons/bootstrap/Person";
import mainLogo from "../assets/images/mainLogo.png";
import Hamburger from "hamburger-react";
import styled from "styled-components";
import CartIcon from "./CartIcon";

const Navbar = ({ cartItems }) => {
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
      <div className="mobile-nav">
            <a href="#">
              <CartIcon cartItems={cartItems} />
            </a>
      
      <Hamburger
        onToggle={() => setActive(Condition)}
        className="hambutton"
        color="#ff8f15"
        size={25}
      />
      </div>
      <nav>
        <ul className={isActive ? "active" : "hidden"}>
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
              <SearchAlt className="styledicon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Person className="styledicon" />
            </a>
          </li>
          <li>
          <a href="#" className= "styledcart">
              <CartIcon cartItems={cartItems} />
            </a>
          </li>
        </ul>
      </nav>
      
    </div>
  );
};

export default Navbar;
