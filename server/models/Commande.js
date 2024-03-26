const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Commande = sequelize.define(
        "Commande",
        {
            dateCommande: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            statut: {
                type: DataTypes.ENUM('à valider','En attente', 'En préparation' ,'Prête à livrer','Prête à retirer','livrée ',  'Annulée', 'Retirée', 'Terminée'),
                allowNull: false,
                defaultValue: 'à valider',
            },
            prix: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        },
        {
            freezeTableName: true,
        }
    );

    return Commande;
};