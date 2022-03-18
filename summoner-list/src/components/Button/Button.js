import React from "react";

const Button = ({buttonText}) => {
  return (
      <button 
      className="btn btn-primary"
      type="submit"
      >
        {buttonText}
      </button>
  )
};

export default Button;
