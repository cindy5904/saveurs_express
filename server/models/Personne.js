const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Personne extends Model {}

  Personne.init(
    {
      personneId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      prenom: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING(255),
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "Personne",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Personne;
};
