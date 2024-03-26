const { Router } = require('express');
const personneRoutes = require('./personneRoutes');

const router = new Router();

router.use(personneRoutes);

module.exports = router;