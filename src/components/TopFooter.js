import React from "react";
import "./style/top-footer.css";
import { Instagram } from "@styled-icons/bootstrap/Instagram";
import { Twitter } from "@styled-icons/bootstrap/Twitter";
import { Facebook } from "@styled-icons/bootstrap/Facebook";
import { Whatsapp } from "@styled-icons/bootstrap/Whatsapp";

const TopFooter = () => {
  return (
    <div className="top-footer">
      <p>¡FOLLOW US!</p>
      <div className="logo">
        <a href="https://www.instagram.com/group4library/" target="_blank">
          <Instagram className="logoItem first" title="Logo from Instagram" />
        </a>
        <a href="https://twitter.com/?lang=es" target="_blank">
          <Twitter className="logoItem second" title="Logo from Twitter" />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <Facebook className="logoItem third" title="Logo from Facebook" />
        </a>

        <a href="https://www.whatsapp.com/?lang=es" target="_blank">
          <Whatsapp className="logoItem fourth" title="Logo from Whatsapp" />
        </a>
      </div>
    </div>
  );
};

export default TopFooter;
