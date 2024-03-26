const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Performance = sequelize.define('Performance', {
        perfomanceId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        venteMensuelle: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        venteTotale: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        venteHebdomadaire: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        menuPlusVendu: {
            type: DataTypes.STRING,
            allowNull: true,
        },


      }, {
        freezeTableName: true,
        timestamps: false, 
      });
      return Performance;
}