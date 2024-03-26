const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      // Champ pour la notation du restaurant
      rating: {
        type: DataTypes.FLOAT, // Peut être un nombre décimal
        allowNull: true, // Permettant de ne pas avoir de notation initiale
      },
      // Autres champs pour les détails du restaurant, comme le numéro de téléphone, le type de cuisine, etc.
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Restaurant;
};
