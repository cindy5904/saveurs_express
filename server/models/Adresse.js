const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Adresse = sequelize.define('Adresse', {
        adresseId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        numero: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        rue: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        codePostal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ville: {
            type: DataTypes.STRING,
            allowNull: false,
        },


      }, {
        freezeTableName: true,
        timestamps: false, 
      });
      return Adresse;
}