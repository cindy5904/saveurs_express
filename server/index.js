require('dotenv').config();
const express = require("express");
const DB = require("./config/db");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

const indexRoutes = require('./routes/indexRoutes');

app.use(express.json())

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200,
}));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/server/v1', indexRoutes);

DB.sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .then(() => {
    app.listen(port, () => {
      console.log("http://localhost:", port);
    });
  })
  .catch((err) => {
    console.log(
      "Erreur lors de la connexion à la base de données",
      err.message
    );
  });

