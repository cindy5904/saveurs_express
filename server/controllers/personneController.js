const { Personne } = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const expiryDate = new Date(Date.now() + 60 * 60 * 7000);

const personneController = {
  signUp: async function (req, res) {
    try {
      const { nom, prenom, email, password, telephone, role } = req.body;
      
      const rolesAutorises = ["client", "livreur", "restaurateur"];

      if (!rolesAutorises.includes(role)) {
        return res
          .status(400)
          .json({ message: "Le rôle spécifié n'est pas valide." });
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      console.log(hashedPassword);
      console.log({ nom, prenom, email, telephone, role});

      const data = await Personne.create({
        nom,
        prenom,
        email,
        password: hashedPassword,
        telephone,
        role,
      });

      res.status(201).json(data);
    } catch (error) {
      res
        .status(400)
        .json({
          message: "Erreur lors de la création d'un nouvel utilisateur",
          error: error.message,
        });
    }
  },

  login: async function (req, res) {
    try {
      const { email, password } = req.body;
      const user = await Personne.findOne({
        where: { email },
      });
      const validPassword = await bcrypt.compare(password, user.password);

      if (!user || !validPassword) {
        return res
          .status(401)
          .json({ message: "Email ou/et mot de passe invalide(s)" });
      }

      const token = jwt.sign(
        { userId: user.id },
        process.env.RANDOM_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      res.cookie("accessToken", token, {
        httpOnly: true,
        // secure: true,
        sameSite: true,
        expires: expiryDate,
      });

      res.json(user);
    } catch (error) {
      res
        .status(400)
        .json({
          message: "Erreur lors de l'authentification",
          error: error.message,
        });
    }
  },

  logout: async function (_req, res) {
    res.clearCookie("accessToken");
    res.json({ message: "Vous avez bien été déconnecté" });
  },

  getUser: async function (req, res) {
    try {
      const user = await Personne.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Personne non trouvé" });
      }
      res.json(user);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Erreur lors de la récupération du profil",
          error: error.message,
        });
    }
  },
};

module.exports = personneController;
