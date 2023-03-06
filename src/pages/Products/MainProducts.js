import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../../components/Product';
import Footer from '../../components/Footer';

const List = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    const api = 'http://localhost:5000/products';

    axios
      .get(api)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <div className="img-container">
       {products.map((elem) => (
          <Product key={elem.id} {...elem} onAddToCart={onAddToCart} />
       ))}
      </div>
      <Footer />
    </>
  );
};

export default List;





