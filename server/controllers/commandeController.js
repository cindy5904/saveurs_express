const { Commande, Menu, Client } = require('../config/db');

const commandeController = {

    getCommandes: async function (req, res) {
        try {
            const commandes = await Commande.findAll();
            res.status(200).json(commandes);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des commandes", error: error.message });
        }
    },

    getCommandeById: async function (req, res) {
        try {
            const { commandeId } = req.params;
            const commande = await Commande.findByPk(commandeId);
            if (!commande) {
                return res.status(404).json({ message: "Commande non trouvée" });
            }
            res.status(200).json(commande);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération de la commande", error: error.message });
        }
    },

    getCommandeByClientName: async function (req, res) {
        try {
            const { clientName } = req.params;

            // Recherche du client par nom
            const client = await Client.findOne({
                where: { nom: clientName },
                include: {
                    model: Commande
                }
            });

            if (!client) {
                return res.status(404).json({ message: "Client non trouvé" });
            }

            res.status(200).json(client.Commandes);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des commandes du client", error: error.message });
        }
    },

    deleteCommande: async function (req, res) {
        try {
            const { commandeId } = req.params;
            const commande = await Commande.findByPk(commandeId);
            if (!commande) {
                return res.status(404).json({ message: "Commande non trouvée" });
            }
            await commande.destroy();
            res.status(200).json({ message: "Commande supprimée avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la suppression de la commande", error: error.message });
        }
    },

    getCommandeWithClientAddress: async function (req, res) {
        try {
            const { commandeId } = req.params;

            // Récupérer la commande avec les détails du client et son adresse
            const commande = await Commande.findOne({
                where: { id: commandeId },
                include: [
                    {
                        model: Client,
                        include: {
                            model: Personne,
                            attributes: ['nom'],
                            include: {
                                model: Adresse,
                                attributes: ['numero', 'rue', 'codePostal','ville']
                            }
                        }
                    }
                ]
            });

            if (!commande) {
                return res.status(404).json({ message: "Commande non trouvée" });
            }

            res.status(200).json(commande);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération de la commande avec l'adresse du client", error: error.message });
        }
    },

    updateCommandWithClientAddress: async function (req, res) {
        try {
            const { commandeId } = req.params;
            const { dateCommande, statut, prix, clientId } = req.body;

            // Vérifier si la commande existe
            const commande = await Commande.findByPk(commandeId);
            if (!commande) {
                return res.status(404).json({ message: "Commande non trouvée" });
            }

            // Vérifier si le client existe
            const client = await Client.findByPk(clientId);
            if (!client) {
                return res.status(404).json({ message: "Client non trouvé" });
            }

            // Mettre à jour la commande avec l'adresse du client
            await commande.update({ dateCommande, statut, prix, clientId });

            res.status(200).json({ message: "Commande mise à jour avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la mise à jour de la commande", error: error.message });
        }
    }
};

module.exports = commandeController;
