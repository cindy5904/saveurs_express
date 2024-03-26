const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Restaurant = sequelize.define(
    "Restaurant",
    {
      restaurantId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
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