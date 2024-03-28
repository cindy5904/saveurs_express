import React, { useState, useRef } from 'react';
import MenuCard from '../menu/MenuCard';
import './style/MenuList.css';
import menuImg from '../../assets/images/header-menu.jpg'
import jsonData from '../../Data/menu.json'

const MenuList = () => {
  const [searchName, setSearchName] = useState('');

  const handleInputChange = (event) => {
    setSearchName(event.target.value);
  };

  const filteredData = jsonData.filter(item => {
    return item.nom.toLowerCase().includes(searchName.toLowerCase());
  });

  return (
    <>
    <div className='header-menu-list'>
      <img className="img-header-menu-list" src={menuImg} alt="image de menu" />
      <h1 className='titre-menu-list'>Menus</h1>
    </div>
    <div className="menu-search-list">
    <input type="text"
          placeholder="Rechercher un menu par nom..."
          className='search-menu-list'
          value={searchName}
          onChange={handleInputChange}
        />
      </div>
      <div className="card-container-menu-list">
        {filteredData.map(item => (
          <MenuCard key={item.id} data={item} />
        ))}
      </div>
      <div class="oval-menu-list"></div>
    </>
  );
};

export default MenuList;