const { DataTypes } = require("sequelize");
const Client = sequelize.import('./Client');   // Importer le modèle Client
const Menu = sequelize.import('./Menu');       // Importer le modèle Menu

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

    // Définir la relation entre Commande et Menu
    Commande.hasMany(Menu, { as: 'menus' });

    // Définir la relation entre Commande et Client

    Commande.belongsTo(Client);

    return Commande;
};
