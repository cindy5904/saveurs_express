const { DataTypes, Model } = require("sequelize");
const sequelize = require('../config/db'); 

class CommandeMenu extends Model {}

CommandeMenu.init(
  {
    commandeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    menuId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CommandeMenu',
    freezeTableName: true,
  }
);

module.exports = CommandeMenu;