const { Router } = require('express');
const personneController = require('../controllers/personneController');
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');

const router = new Router();

router.post('/signup', personneController.signUp);
router.post('/login', personneController.login);
router.post('/logout', personneController.logout);

router.get('/profile/:id', verifyTokenMiddleware, personneController.getUser);

module.exports = router;