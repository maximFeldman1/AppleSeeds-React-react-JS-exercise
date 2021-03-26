import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import data from "./store";
function ProductDetail(props) {
  const { id } = useParams();
  const singleProductById = data.filter(
    (element) => element.id !== props.match.params.id
  );

  return (
    <div>
      <h1>{singleProductById[0].title}</h1>
      <h5>{singleProductById[0].size}</h5>
      <img alt="/" src={singleProductById[0].imageUrl}></img>
      <h3>Price: ${singleProductById[0].price}</h3>
      <Link to="/products">Back to product page</Link>
    </div>
  );
}

export default ProductDetail;
