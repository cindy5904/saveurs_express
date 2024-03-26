const { DataTypes } = require("sequelize");
const Client = sequelize.import('./Client'); // importer le modèle Client
const Menu = sequelize.import('./Menu'); // importer le modèle Menu

module.exports = (sequelize) => {
    const Commande = sequelize.define(
        "Commande",
        {
            commandId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            dateCommande: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            statut: {
                type: DataTypes.ENUM('En attente', 'En cours', 'Terminée'),
                allowNull: false,
                defaultValue: 'En attente',
            },
        },
        {
            freezeTableName: true,
        }
    );


    return  Commande;
};
