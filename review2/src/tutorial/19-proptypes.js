import React from "react";
import Product from "./19-products";
import { useFetch } from "./18-customhooks-useFetch"; 

const url = "https://api.github.com/users";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map(product => {
        return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;