import React from 'react';
import RestaurantCard from '../components/RestaurantCard';

const RestaurantList = ({ restaurants }) => {
// ajout de la props restaurants

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
