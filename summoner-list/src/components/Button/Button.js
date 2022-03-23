import React from "react";

const Button = ({variant, buttonText, style}) => {
  return (
      <button className={variant} type="submit" style={style}>
        <span className="span">
          {buttonText}
        </span>
      </button>
  )
};

export default Button;
