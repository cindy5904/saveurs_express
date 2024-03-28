import React, { useState } from 'react';
import './style/menuCard.css';
import { addPanier } from '../Global/globalSlice';
import { useDispatch } from 'react-redux'


const MenuCard = ({ data, view }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addPanier({ id: data.id, quantity: 1, nom: data.nom, prix: data.prix, image: data.image }));
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
        {(!view) ? <button className="btn-menu" onClick={handleAddToCart}>
          Commander
        </button> : <></>}

      </div>
    </div>
  );
};

export default MenuCard;
