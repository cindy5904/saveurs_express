const { DataTypes } = require("sequelize");
const Personne = require("./Personne");

module.exports = (sequelize) => {
  class Client extends Personne {}

  Client.init(
    {
      clientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      personneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Client",
      timestamps: false,
      freezeTableName: true,
    }
  );

  return Client;
};
