import React, { useState } from "react";
import mainLogo from "../assets/images/mainLogo.png";
import "./style/bottom-footer.css";
import BottomItem from "./BottomItem";
import { SuitHeartFill } from "@styled-icons/bootstrap/SuitHeartFill";

const BottomFooter = () => {
  return (
    <div className="bottom-footer">
      <div className="options">
      <div><img alt="startup main logo" src={mainLogo} /></div>
        <BottomItem
          title="Online"
          list={["Ofertas", "Promociones", "Formas de pago"]}
        />
        <BottomItem
          title="Library"
          list={["Título", "Autor", "Genero", "Año"]}
        />
        <BottomItem title="Locations" list={["Buscador", "Más cercano"]} />
        <BottomItem
          title="Policy"
          list={[
            "Política de privacidad",
            "Política de cookies",
            "Condiciones de uso",
          ]}
        />
        <BottomItem title="Contact" />
      </div>
      <div className="lastphrase">
      <p>
        {" "}
        Created with &nbsp;{" "}
        <SuitHeartFill title="representation of love" size="15px" /> &nbsp; by
        Group Four &copy;
      </p>
      </div>
    </div>
  );
};

export default BottomFooter;
