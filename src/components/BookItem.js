import React from "react";
import ModalPopUp from "./ModalPopUp";
import { Slide } from "./BookSlidesWork";



const BookItem = ({id,title, author,price,cover_image: url, onAdd }) => {
  
  return (
   <Slide>
    <div className="card-s2">
      <div>
        <img src={url} alt={`Book n° ${id}`} className="card-image-s2" />
      </div>
      <div className="card-title-s2">
        <p>{title}</p>
        <p>{author}</p>
      </div>
      <div>
        <ModalPopUp onAdd={onAdd} price={price} name={author} img= {url} />
      </div>
    </div>
    </Slide>
  );
}




export default BookItem