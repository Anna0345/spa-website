import { useParams } from 'react-router-dom';
import Product from "../../components/Product";
import Footer from '../../components/Footer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UniqueList = ({ onAddToCart }) => {
  const { id } = useParams(); // Get the id parameter from the URL

  const [chairs, setChairs] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/products/+${id}`) 
      .then(response => {
        setChairs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      <div className="img-container">
          <Product key={chairs.id} {...chairs} onAddToCart={onAddToCart} />
      </div>
      <Footer />
    </>
  );
};

export default UniqueList;
