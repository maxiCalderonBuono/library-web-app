import React from "react";
import { Slide } from "./BookSlidesWork";

const InstagramItem = ({ id, media_url: url }) => {
  return (
    <Slide>
      <div className="instagram-card">
        <img src={url} alt={`Book n° ${id}`} className="perspective" />
      </div>
    </Slide>
  );
};

export default InstagramItem;
