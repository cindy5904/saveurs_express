const { Router } = require('express');
const personneRoutes = require('./personneRoutes');
const restaurantRoutes = require('./restaurantRoutes');

const router = new Router();

router.use(personneRoutes);
router.use(restaurantRoutes);

module.exports = router;