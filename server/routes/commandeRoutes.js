const { Router } = require('express');
const commandeController = require('../controllers/commandeController');
const personneController = require('../controllers/personneController')
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');

const router = new Router();

router.get('/commandes', commandeController.getCommandesByRestaurant);
router.post('/commande/create', commandeController.createCommande);
router.get('/commande/:commandeId', commandeController.getCommandeById);
router.get('/commande/nom/:nom', commandeController.getCommandeByClientName);
router.delete('/commande/delete/commandeId', commandeController.deleteCommande);
router.get('/commande/adresse/:commandeId', commandeController.getCommandeWithClientAddress);


router.get('/profile/:id', verifyTokenMiddleware, personneController.getUser);

module.exports = router;