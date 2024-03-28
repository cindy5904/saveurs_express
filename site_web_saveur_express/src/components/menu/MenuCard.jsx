import React, { useState } from 'react';
import './style/menuCard.css';

const MenuCard = ({ data }) => { 
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(data);
    setCartCount(cartCount + 1);
  };
  return (
    <div className="card">
      <div className="container-image">
        <img src={data.image} alt={data.nom} className="card-image" />
      </div>
      <div className="card-content">
        <h2>{data.nom}</h2>
        <p className='menu-text'>{data.description}</p>
        <p className='menu-text'>Prix: {data.prix}</p>
      </div>
      <div className="button-menu">
      <button className="btn" onClick={handleAddToCart}>
        Commander
      </button>
      </div>
    </div>
  );
};

export default MenuCard;
