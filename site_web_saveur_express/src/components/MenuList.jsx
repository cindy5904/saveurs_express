import React from 'react';
import MenuCard from './MenuCard'; // Importe le composant MenuCard
import './style/MenuList.css'; // Importe le fichier CSS pour le style

const MenuList = ({ menus }) => {
  return (
    <div className="menu-list">
      {menus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} /> // Affiche MenuCard pour chaque menu dans la liste
      ))}
    </div>
  );
};

export default MenuList;
