import React from "react";

import "./Product.css";

const Product = ({ src, title, url }) => {
  return (
    <div className="product">
      <a href={url}>
        <img src={src} />
        <h1>{title}</h1>
      </a>
    </div>
  );
};

export default Product;
