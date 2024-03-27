const { Router } = require('express');
const menuController = require('../controllers/menuController');
const personneController = require('../controllers/personneController');
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');

const router = new Router();

router.get('/menu', menuController.getMenu);
router.get('/menu/:menuId', menuController.getMenuById);
router.post('/menu/create', menuController.createMenu);
router.put('/menu/update/:menuId', menuController.updateMenu);
router.delete('/menu/delete/:menuId', menuController.deleteMenu);
router.get('/menu/nom/:nom', menuController.getMenuByName);


router.get('/profile/:id', verifyTokenMiddleware, personneController.getUser);

module.exports = router;