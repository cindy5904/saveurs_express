const { Router } = require('express');
const restaurantController = require('../controllers/restaurantController');
const verifyTokenMiddleware = require('../middleware/verifyTokenMiddleware');

const router = new Router();

router.get('/restaurants', restaurantController.getRestaurants);
router.get('/restaurant/:userId', verifyTokenMiddleware, restaurantController.getRestaurantByUser);
router.get('/restaurant/:restaurantId', restaurantController.getRestaurantById);
router.get('/restaurant/nom/:nom', restaurantController.getRestaurantByName);

router.post('/create-restaurant', verifyTokenMiddleware, restaurantController.createRestaurant);
router.put('/update-restaurant/:restaurantId', verifyTokenMiddleware, restaurantController.updateRestaurant);
router.delete('/delete-restaurant/:restaurantId', verifyTokenMiddleware, restaurantController.deleteRestaurant);


module.exports = router;