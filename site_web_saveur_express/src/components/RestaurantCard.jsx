import React from 'react';

const RestaurantCard = ({ restaurant, adresse }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{restaurant.nom}</h5>
        <p className="card-text">Notation: {restaurant.notation}</p>
        <p className="card-text">Spécialité: {restaurant.specialite}</p>
        {adresse && (
          <div>
            <p className="card-text">Adresse:</p>
            <p className="card-text">Numéro: {adresse.numero}</p>
            <p className="card-text">Rue: {adresse.rue}</p>
            <p className="card-text">Ville: {adresse.ville}</p>
            <p className="card-text">Code Postal: {adresse.codePostal}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;