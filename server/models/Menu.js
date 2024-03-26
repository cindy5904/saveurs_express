const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
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

    return Menu;
};