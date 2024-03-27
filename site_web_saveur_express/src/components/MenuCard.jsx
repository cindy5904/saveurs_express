import React from 'react';

const MenuCard = ({ menu }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{menu.nom}</h5>
        <p className="card-text">Prix: {menu.prix}</p>
        <p className="card-text">Description: {menu.description}</p>
      </div>
    </div>
  );
};

export default MenuCard;
