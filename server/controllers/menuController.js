const { Menu } = require('../config/db')

const menuController = {
    createMenu : async function (req, res) {
        try {
            const { nom, prix, description } = req.body;
            if (!nom || !prix || !description) {
                return res.status(400).json({ message: "Toutes les informations sont requises pour l'enregistrement du menu" });
            }
            await Menu.create({ nom, prix, description });
            res.status(201).json({ message: "Menu créé avec succès" });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la création du menu", error: error.message });
        }
        },

        getMenu : async function (req, res) {
            try {
                const menu = await Menu.findAll();
                res.status(200).json(menu);
            } catch (error) {
                res.status(500).json({ message: "Erreur lors de la récupération des menus", error: error.message });
            }
        },
        getMenuById: async function (req, res) {
            try {
                const { menuId } = req.params;
                const menu = await  Menu.findOne({ where: { id: menuId } });
                if (!menu) {
                    return res.status(404).json({ message: "Menu non trouvé" });
                }
                res.status(200).json(menu);
            } catch (error) {
                res.status(500).json({ message: "Erreur lors de la récupération du menu", error: error.message });
            }
        },

     
        updateMenu: async function (req, res) {
            try {
                const { menuId } = req.params;
                const { nom, prix , description } = req.body;
    
                const menu = await Menu.findOne({ where: { id: menuId } });
                if (!menu) {
                    return res.status(404).json({ message: "Menu non trouvé" });
                }
    
                await menu.update({ nom,  prix , description });
    
                res.status(200).json({ message: "Menu mis à jour avec succès" });
            } catch (error) {
                res.status(500).json({ message: "Erreur lors de la mise à jour du menu", error: error.message });
            }
        },

        deleteMenu: async function (req, res) {
            try {
                const { menuId } = req.params;
        
                const menu = await Menu.findOne({ where: { id: menuId } });
                if (!menu) {
                    return res.status(404).json({ message: "Menu non trouvé" });
                }
        
                await menu.destroy();
        
                res.status(200).json({ message: "Menu supprimé avec succès" });
            } catch (error) {
                res.status(500).json({ message: "Erreur lors de la suppression du menu", error: error.message });
            }
        },

        getMenuByName: async function (req, res) {
            try {
                const { nom } = req.params;
        
                const menu = await Menu.findOne({ where: { nom } });
                if (!menu) {
                    return res.status(404).json({ message: "Menu non trouvé" });
                }
        
                res.status(200).json(menu);
            } catch (error) {
                res.status(500).json({ message: "Erreur lors de la récupération du menu par nom", error: error.message });
            }
        },
        
    }

module.exports = menuController;    
