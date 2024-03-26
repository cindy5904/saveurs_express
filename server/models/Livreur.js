const { DataTypes } = require("sequelize");
const Personne = require("./Personne");

module.exports = (sequelize) => {
  class Livreur extends Personne {}

  Livreur.init(
    {
      livreurId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vehicule: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      personneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Livreur",
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Livreur;
};
