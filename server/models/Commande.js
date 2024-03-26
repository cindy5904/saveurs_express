const { DataTypes } = require("sequelize");
const Client = sequelize.import('./client');   // Importer le modèle Client

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

    const Menu = sequelize.define(
        "Menu",
        {
            menuId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nom: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            prix: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
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

    return { Commande, Menu };
};
