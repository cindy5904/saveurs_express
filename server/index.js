require('dotenv').config();
const express = require("express");
const DB = require("./config/db");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

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

