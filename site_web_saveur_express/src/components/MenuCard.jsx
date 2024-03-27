import React from 'react';
import './style/menuCard.css';

const MenuCard = ({ menu, addToCart }) => { // Ajout addToCart dans les props
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{menu.nom}</h5>
        <p className="card-text">Prix: {menu.prix}</p>
        <p className="card-text">Description: {menu.description}</p>
        <button onClick={() => addToCart(menu)}>Ajouter au panier</button>
      </div>
    </div>
  );
};

export default MenuCard;
