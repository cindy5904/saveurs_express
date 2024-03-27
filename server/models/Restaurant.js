const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      nom: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      notation: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      specialite: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(255),
        allowNull: true, 
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Restaurant;
};
