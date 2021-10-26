import React from "react";
import { BookSlidesWork } from "./BookSlidesWork";
import "./style/slideshow.css";
import useAxiosBooks from "../hooks/useAxiosBooks";
import BookItem from "./BookItem";

const BookSlides = ({ onAdd }) => {
  const url = "https://www.mockachino.com/96da619c-bdcb-48/books";

  const books = useAxiosBooks(url);
  
console.log(books)
  return (
    <BookSlidesWork controles={true}>
      {(books.length === 0 ? books : books.books).map((book) => (
        <BookItem onAdd={onAdd} key={book.id} {...book} />
      ))}
    </BookSlidesWork>
  );
};

export default BookSlides;
