import React from "react";

export default function Square({value, onClick}) {
  const style = {
    background: "lightblue",
    border: "4px solid darkblue",
    fontSize: "40px",
    fontWeigt: "800",
    cursor: "pointer",
    outline: "none"
  }
  return (
    <button style={style} onClick={onClick}>{value}</button>
  );
}