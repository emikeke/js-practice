import React from "react";
import PropTypes from "prop-types";

const Product = ({avatar_url, login}) => {
  return <article className="product">
    <img src={avatar_url} alt={login}/>
    {login}
  </article>
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}
Product.defaultProps = {
  avatar_url: "default name",
  name: "emily k"
}

export default Product;