const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Personne = sequelize.define('Personne', 
    {
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
      timestamps: false,
      freezeTableName: true,
    }
  );
  return Personne;
};
