import React, { useState } from 'react';
import './style/menuCard.css';

const MenuCard = ({ data }) => { 
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    onAddToCart(data);
    setCartCount(cartCount + 1);
  };
  return (
    <div id="card-menu" className="card">
      <div className="container-image">
        <img src={data.image} alt={data.nom} className="card-image-menu" />
      </div>
      <div className="card-content-menu">
        <h2 className='title-h2-menu'>{data.nom}</h2>
        <p className='menu-text'>{data.description}</p>
        <p className='menu-text'>Prix: {data.prix}</p>
      </div>
      <div className="button-menu">
      <button className="btn-menu" onClick={handleAddToCart}>
        Commander
      </button>
      </div>
    </div>
  );
};

export default MenuCard;
