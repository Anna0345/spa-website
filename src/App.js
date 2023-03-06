import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import ProductPages from './pages/Products/MainProducts';
import UniquePages from './pages/Products/Products'
import { FiHeart } from 'react-icons/fi';
import './styles/spa.scss';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import React, { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  }

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">Products</Link>
          </li>
        </ul>
        <h3 className='brandName'>SerMar</h3>
        <span className="navbar-icons">
          <AiOutlineSearch className="search-icon" />
          <FiHeart className="heart-icon" />
          <Link to="/cart">
            <AiOutlineShoppingCart className='cart-icon' />
            <span className="cart-count">{count > 0 ? count : ''}</span>
          </Link>
          </span>
        </nav>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductPages onAddToCart={handleAddToCart} />}  />
        <Route path="/products/:id" element={<UniquePages onAddToCart={handleAddToCart} />}  />

      
      </Routes>
    </>
  );
};

