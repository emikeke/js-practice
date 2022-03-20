import React from "react";

const Button = ({buttonText, style}) => {
  return (
      <button className="btn btn-primary"type="submit"style={style}>
        <span className="span">
          {buttonText}
        </span>
      </button>
  )
};

export default Button;
