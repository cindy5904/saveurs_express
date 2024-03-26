const { Restaurant } = require('../config/db');

const restaurantController = {
    createRestaurant: async function (req, res) {
        try {
            const { nom, adresse, notation, specialite } = req.body;
            if (!nom || !adresse) {
                return res.status(400).json({ message: "Le nom et l'adresse du restaurant sont requis" });
            }
            await Restaurant.create({ nom, adresse, notation, specialite });
            res.status(201).json({ message: "Restaurant créé avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la création du restaurant", error: error.message });
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
            const { nom, adresse, notation, specialite } = req.body;

            const restaurant = await Restaurant.findByPk(restaurantId);
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant non trouvé" });
            }

            await restaurant.update({ nom, adresse, notation, specialite });

            res.status(200).json({ message: "Restaurant mis à jour avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la mise à jour du restaurant", error: error.message });
        }
    },

    deleteRestaurant: async function (req, res) {
        try {
            const { restaurantId } = req.params;
            const restaurant = await Restaurant.findByPk(restaurantId);
            if (!restaurant) {
                return res.status(404).json({ message: "Restaurant non trouvé" });
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
            const restaurant = await Restaurant.findOne({ where: { nom } });
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
