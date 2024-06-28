const foodService = require('../services/foodService');

const getAllFoods = async (req, res) => {
    const foods = await foodService.getAllFoods();
    return res.status(200).json(foods);
};

const getFoodByID = async (req, res) => {
    try{
        const foods = await foodService.getFoodByID(req.body.id)
        console.log(foods);
        if (!foods) {
            return res.status(404).json({ message: 'Alimento não encontrado' });
        }
        res.json(foods);  
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
};

const newFood = async (req, res) => {
    try {
        const food = await foodService.newFood(req.body);
        res.status(201).json(food);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateFood = async (req, res) => {
    try{
        const food = await foodService.updateFood(req.body.id, {name: req.body.name, category: req.body.category, quantity: req.body.quantity, expirationDate: req.body.expirationDate, price: req.body.price});
        res.status(200).json(food);
    } catch (error){
        res.status(400).json({message: error.message});
    }
    
};

const deleteFood = async (req, res) =>{
    try{
        const food = await foodService.deleteFood(req.params.id);
        res.status(200).json({message: 'Alimento desintegrado da face da Terra!'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

module.exports = {
    getAllFoods,
    getFoodByID,
    newFood,
    updateFood,
    deleteFood
};