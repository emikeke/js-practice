import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// named export
import { books } from "./books";

// default export
import Book from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book ) => {
      return (
        <Book  
        key={book.id} 
        {...book}>
        </Book>    
      );
    })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"))