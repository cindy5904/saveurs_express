const { Router } = require('express');
const personneRoutes = require('./personneRoutes');
const menuRoutes = require('./menuRoutes');
const commandeRoutes = require('./commandeRoutes')

const router = new Router();

router.use(personneRoutes);
router.use(menuRoutes);
router.use(commandeRoutes);

module.exports = router;