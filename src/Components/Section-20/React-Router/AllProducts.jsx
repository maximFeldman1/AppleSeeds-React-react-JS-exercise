import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Homepage";
import Product from "./Products";
import Header from "./Header";



const AllProducts = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" exact component={Product} />
          <Route path="/Header" exact component={Header} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AllProducts;
