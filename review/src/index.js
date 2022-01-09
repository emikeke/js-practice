import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [{
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/413DTwW38wL._SX329_BO1,204,203,200_.jpg",
    author: "Jenny Pentland",
    title: "This Will Be Funny Later: A Memoir"
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/41k9f-9zASL._SX329_BO1,204,203,200_.jpg",
    author: "Galit Atlas",
    title: "Emotional Inheritance: A Therapist, Her Patients, and the Legacy of Trauma"
  }
]

const names = ["john", "peter", "susan"]
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
      return (
        <Book key={book.id} {...book}/>
      );
    })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("Hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img} alt="book-cover"></img>
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"))