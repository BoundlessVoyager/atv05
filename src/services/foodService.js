const foodModel = require('../models/foodModel');

const getAllFoods = async() => {
    return await foodModel.find();
};

const getFoodByID = async(foodID) => {
    return await foodModel.findOne({ foodID });
};

const newFood = async (foodData) => {
    const food = foodModel(foodData);
    await food.save();
    return food;
}

const updateFood = async (foodID, newFood) => {
    return await foodModel.updateOne(foodID, newFood);  
};

const deleteFood = async (foodID) => {
    return await foodModel.findByIdAndDelete(foodID);
}

module.exports = {
    getAllFoods,
    getFoodByID,
    newFood,
    updateFood,
    deleteFood
};