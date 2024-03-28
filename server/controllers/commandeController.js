const { Commande, Menu, Personne, Adresse, CommandeMenu } = require('../config/db');


const commandeController = {
    createCommande : async function (req, res) {
        try {
            const { userId, adresseId, menus, prixTotal } = req.body;
          
            const user = await Personne.findByPk(userId);

            const adresse = await Adresse.findByPk(adresseId);
        
            console.log(adresse.id);

            const commande = await Commande.create({
                 PersonneId: user.id, 
                 AdresseId: adresse.id, 
                 prix: prixTotal
                });
            
            for (const menu of menus) {
                const menuInDb = await Menu.findByPk(menu.id);
                if (!menuInDb) {
                    return res.status(404).json({ message: `Le menu avec l'id ${menu.id} n'existe pas`})
                }

                await CommandeMenu.create({
                    CommandeId: commande.id,
                    MenuId: menu.id,
                    quantite: menu.quantite
                });
            }



            const commandeUpdated = await Commande.findOne({
                where: {
                    id: commande.id, 
                   },
                   include: [
                       {
                           model: Menu,
                           through: { attributes: ['quantite'] }
                       },
                   ]
                })
            



            
            res.status(201).json(
                { 
                    message: "commande créé avec succès" , 
                    nom: user.nom,
                    prenom : user.prenom,
                    telephone : user.telephone,
                    adresse:
                    {
                        numero: adresse.numero,
                        rue: adresse.rue,
                        codePostal: adresse.codePostal,
                        ville: adresse.ville,
                     },
                     detailsCommande : commandeUpdated,
                     prix: prixTotal
                }
            );
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la création de la commande", error: error.message });
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

    getCommandesByRestaurant: async function (req, res) {
        try {
            const { restaurantId } = req.body;

            const commandes = await Commande.findAll(
                { 
                    where: {
                     restaurantId: restaurantId 
                    },
                    include: [
                        {
                            model: Personne,
                        },
                        {
                            model: Adresse,
                        }
                    ]
                }
            );

            res.status(200).json({ commandes });

        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupé des commandes", error: error.message });
        }
    },
    getCommandeByClientName: async function (req, res) {
        try {
            const { clientName } = req.params;

            // Recherche du client par nom
            const personne = await Personne.findOne({
                where: { nom: clientName },
                include: {
                    model: Commande
                }
            });

            if (!personne) {
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

    // updateCommandWithClientAddress: async function (req, res) {
    //     try {
    //         const { commandeId } = req.params;
    //         const { dateCommande, statut, prix, clientId } = req.body;

    //         const commande = await Commande.findByPk(commandeId);
    //         if (!commande) {
    //             return res.status(404).json({ message: "Commande non trouvée" });
    //         }

    //         const client = await Client.findByPk(clientId);
    //         if (!client) {
    //             return res.status(404).json({ message: "Client non trouvé" });
    //         }

    //         await commande.update({ dateCommande, statut, prix, clientId });

    //         res.status(200).json({ message: "Commande mise à jour avec succès" });
    //     } catch (error) {
    //         res.status(500).json({ message: "Erreur lors de la mise à jour de la commande", error: error.message });
    //     }
    // }
};

module.exports = commandeController;
