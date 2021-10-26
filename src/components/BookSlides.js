import React from "react";
import { BookSlidesWork } from "./BookSlidesWork";
import "./style/slideshow.css";
import useAxiosBooks from "../hooks/useAxiosBooks";
import BookItem from "./BookItem";

const BookSlides = ({ onAdd }) => {
  const url = "http://localhost:3000/books";

  const books = useAxiosBooks(url);

  return (
    <BookSlidesWork controles={true}>
      {books.map((book) => (
        <BookItem onAdd={onAdd} key={book.id} {...book} />
      ))}
    </BookSlidesWork>
  );
};

export default BookSlides;
