import React from "react";
import Product from "./../components/Product";
import products from './../data/ProductsList';

const List = ({onAddToCart}) => {
  

  return (
   <div className="img-container">
      {products.map((product) => (
        <Product key={product.id} {...product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default List;