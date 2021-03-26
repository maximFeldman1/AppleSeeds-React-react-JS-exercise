import data from "./store";
import { Link, useParams } from "react-router-dom";
import React, { Component } from "react";

export default class Products extends Component {
  state = {
    data: [],
  };

  componentDidMount = () => {
    this.setState({ data });
  };

  render() {
          const product_title = this.state.data.map((element) => {
            return (
              <Link key={element.id} to={`/products/${element.id}`}>
                {element.title}
                {/* {element.imageUrl} */}
              </Link>
            );
          });
    return <div className="productsTitle">{product_title}</div>;
  }
}
