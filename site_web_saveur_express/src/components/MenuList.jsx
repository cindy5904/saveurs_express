import React, { useState, useRef } from 'react';
import MenuCard from './MenuCard';
import './style/menuList.css';

const MenuList = ({ menus }) => {
  const filterInputRef = useRef(null); // Référence pour la zone de saisie

  // Fonction de mise à jour de l'état avec le critère de filtrage saisi par l'utilisateur
  const handleFilterChange = () => {
    const filterValue = filterInputRef.current.value; // Récupère la valeur de la zone de saisie
    setFilterCriteria(filterValue); // Met à jour l'état avec la valeur saisie
  };

  const [filterCriteria, setFilterCriteria] = useState(''); // État pour stocker les critères de filtrage

  // Filtre les menus en fonction du critère de filtrage (nom du menu)
  const filteredMenus = menus.filter((menu) =>
    menu.nom.toLowerCase().includes(filterCriteria.toLowerCase())
  );

  return (
    <div className="menu-list">
      {/* Zone de saisie pour le filtrage par nom */}
      <input
        type="text"
        placeholder="Rechercher un menu par nom..."
        ref={filterInputRef} // Associe la référence à la zone de saisie
        onChange={handleFilterChange} // Appelle la fonction de mise à jour lors de tout changement
      />

      {/* Affichage des cartes de menu filtrées */}
      {filteredMenus.map((menu) => (
        <MenuCard key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default MenuList;
