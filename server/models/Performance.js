const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Performance = sequelize.define('Performance', {
    
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