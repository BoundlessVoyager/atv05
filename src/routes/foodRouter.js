const express = require('express');
const router = express.Router();
const foodController = require('../controllers/foodController');

router.get('/foods', foodController.getAllFoods);
router.get('/foods/:id', foodController.getFoodByID);
router.post('/foods', foodController.newFood);
router.put('/foods/:id', foodController.updateFood);
router.delete('/foods/:id', foodController.deleteFood);

module.exports = router;