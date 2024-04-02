const { Router } = require('express');
const menuController = require('../controllers/menuController');
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');

const router = new Router();

router.get('/menu', menuController.getMenu);
router.get('/menus/restaurant/:restaurantId', menuController.getMenusByRestaurant);
router.get('/menu/:menuId', menuController.getMenuById);
router.get('/menu/nom/:nom', menuController.getMenuByName);

router.post('/menu/create', verifyTokenMiddleware, menuController.createMenu);
router.put('/menu/update/:menuId', verifyTokenMiddleware, menuController.updateMenu);
router.delete('/menu/delete/:menuId', verifyTokenMiddleware, menuController.deleteMenu);


module.exports = router;