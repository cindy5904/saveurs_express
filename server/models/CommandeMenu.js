const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const CommandeMenu = sequelize.define(
        "CommandeMenu",
        {
            quantite: {
                type: DataTypes.INTEGER,
                allowNull: false,
                
            },
        },
        {
            freezeTableName: true,
        }
    );

    return CommandeMenu;
};