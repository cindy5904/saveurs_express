const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Menu = sequelize.define(
        "Menu",
        {
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
            image: {
                type: DataTypes.STRING(255),
                allowNull: true, 
            },
        },
        {
            freezeTableName: true,
        }
    );

    return Menu;
};
