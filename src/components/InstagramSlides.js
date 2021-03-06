import React from "react";
import { BookSlidesWork } from "./BookSlidesWork";
import "./style/slideshow.css";
import useAxiosBooks from "../hooks/useAxiosBooks";
import InstagramItem from "./InstagramItem";
//import portada from "../assets/images/buybook.jpg";

const InstagramSlides = () => {
  const url = "https://www.mockachino.com/e13fa5e1-34e4-48/books"
  //Se crea perfil de instagram y api con respectivo token, haciendo uso de nocodeapi.
  //Lamentablemente se superaron los request gratuitos.
  
  const get = useAxiosBooks(url);

  return (
    <main>
      <div class="container-media">
        <div class="card-media">
          <div class="imgBx">
            <img src="https://i.imgur.com/4sJDjxy.jpg" alt="" />
          </div>

          <div class="content">
            <h2>
              Surprise someone
            </h2>

            <h3>Best books to give as a gifts</h3>
            <p>
              Thanks to these books for gifts, your friend's bedside bookstack
              will be standing tall.
            </p>
            <button className="text-cap">
              <a href="#lastest-offers">Buy now</a>
            </button>
          </div>
        </div>
      </div>

      <BookSlidesWork controles={true}>
        {(get.length === 0 ? get : get.books).map((book) => (
          <InstagramItem key={book.id} {...book} />
        ))}
      </BookSlidesWork>
    </main>
  );
};

export default InstagramSlides;
