const { Restaurant, Adresse, Personne } = require('../config/db');

const restaurantController = {
    createRestaurant: async function (req, res) {
        try {
            const { nom, notation, specialite, image, numero, rue, ville, codePostal, userId  } = req.body;

            const user = await Personne.findByPk(userId);

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            if (user.role !== "restaurateur") {
                return res.status(403).json({ message: "Vous n'êtes pas autorisé à créer un restaurant" });
            }

            if (!nom) {
                return res.status(400).json({ message: "Le nom du restaurant sont requis" });
            }

            const restaurantExist = await Restaurant.findOne({ where: { nom } });

            if (restaurantExist) {
                return res.status(400).json({ message: "Un restaurant avec ce nom existe déjà" });
            }

            const restaurant = await Restaurant.create({ 
                nom,
                notation,
                specialite,
                image,
            });

            await Personne.update({ RestaurantId: restaurant.id }, { where: { id: userId } });

            await Adresse.create({ numero, rue, ville, codePostal, RestaurantId: restaurant.id,});

            res.status(201).json({ message: "Restaurant créé avec succès" });

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la création du restaurant", error: error.message });
        }
    },

    getRestaurantByUser : async function (req, res) {
        try {
            const { userId } = req.params;

            const user = await Personne.findByPk(userId);

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            const restaurant = await Restaurant.findAll({ where: { id: user.RestaurantId },
                include: {
                    model: Adresse,
                },
            });

            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant non trouvé" });
            }

            res.status(200).json(restaurant);

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération du restaurant", error: error.message });
        }
    },

    getRestaurants: async function (req, res) {
        try {
            const restaurants = await Restaurant.findAll();
            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des restaurants", error: error.message });
        }
    },

    getRestaurantById: async function (req, res) {
        try {
            const { restaurantId } = req.params;
            const restaurant = await Restaurant.findByPk(restaurantId);
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant non trouvé" });
            }
            res.status(200).json(restaurant);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération du restaurant", error: error.message });
        }
    },

    updateRestaurant: async function (req, res) {
        try {
            const { restaurantId } = req.params;
            
            const { nom, notation, specialite, numero, rue, ville, codePostal, userId } = req.body;

            const user = await Personne.findByPk(userId);

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            const restaurant = await Restaurant.findByPk(restaurantId);

            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant non trouvé" });
            }

            if (user.RestaurantId !== restaurant.id) {
                return res.status(403).json({ message: "Vous n'êtes pas autorisé à mettre à jour ce restaurant" });
            }

            await restaurant.update({ nom, notation, specialite });

            const adresse = await Adresse.findOne({ where: { restaurantId } });

            await adresse.update({ numero, rue, ville, codePostal });

            res.status(200).json({ message: "Restaurant mis à jour avec succès" });

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la mise à jour du restaurant", error: error.message });
        }
    },

    deleteRestaurant: async function (req, res) {
        try {
            const { restaurantId, userId } = req.params;

            const user = await Personne.findByPk(userId);

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }

            const restaurant = await Restaurant.findByPk(restaurantId);

            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant non trouvé" });
            }

            if (user.RestaurantId !== restaurant.id) {
                return res.status(403).json({ message: "Vous n'êtes pas autorisé à supprimer ce restaurant" });
            }

            await restaurant.destroy();

            res.status(200).json({ message: "Restaurant supprimé avec succès" });

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la suppression du restaurant", error: error.message });
        }
    },

    getRestaurantByName: async function (req, res) {
        try {
            const { nom } = req.params;

            const restaurant = await Restaurant.findOne({ where: { nom },
                include: {
                    model: Adresse,
                },
            });

            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant non trouvé" });
            }

            res.status(200).json(restaurant);

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération du restaurant", error: error.message });
        }
    },
};

module.exports = restaurantController;
