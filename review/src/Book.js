import  React from "react";

// can destructure like this inside the props object or can put (props) and destructure outside ** 
export const Book = ({ img, title, author }) => {
  // ** const { img, title, author } = props;
  const clickHandler = () => {
    // this refers to line 52
    alert("Hello world");
  };
  const complexExample = (author) => {
    console.log(author);
  }; 
  return (
    <article className="book" onMouseOver={() =>{
      console.log(title);
    }}>
      <img src={img} alt="book-cover"></img>
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>reference example</button>
      <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
};

export default Book;