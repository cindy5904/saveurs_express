const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const Client = require("../models/Client")(sequelize);
const Commande = require("../models/Commande")(sequelize);
const Livreur = require("../models/Livreur")(sequelize);
const Restaurant = require("../models/Restaurant")(sequelize);
const Performance = require("../models/Performance")(sequelize);
const Menu = require("../models/Menu")(sequelize);
const Adresse = require("../models/Adresse")(sequelize);
const Personne = require("../models/Personne")(sequelize);

Client.belongsTo(Personne, { foreignKey: "personneId" }) 
Personne.hasOne(Client);

Livreur.belongsTo(Personne, { foreignKey: "personneId" });
Personne.hasOne(Livreur);

Livreur.hasMany(Commande, { foreignKey: "livreurId" });
Commande.belongsTo(Livreur);

Restaurant.hasMany(Performance, { foreignKey: "restaurantId" });
Performance.belongsTo(Restaurant)

Restaurant.hasMany(Adresse, { foreignKey: "restaurantId" });
Adresse.belongsTo(Restaurant)

Commande.hasMany(Menu, { foreignKey: "commandeId" });
Menu.belongsTo(Commande)

Client.hasMany(Commande, { foreignKey: "clientId" });
Commande.belongsTo(Client)

Commande.belongsToMany(Menu, { through: 'CommandeMenu', foreignKey: 'commandeId' });
Menu.belongsToMany(Commande, { through: 'CommandeMenu', foreignKey: 'menuId' });

sequelize
  .sync({ force: false })
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
  );

module.exports = {
  sequelize,
};
