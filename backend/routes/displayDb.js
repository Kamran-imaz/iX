const express = require('express');
const router = express.Router();
const User = require('../models/cedb');

router.get('/', async (req, res) => {
    try {
        const { state, city, category } = req.query;

        const checkData = await User.find({
            state: state.charAt(0).toUpperCase() + state.slice(1),
            city: city.charAt(0).toUpperCase() + city.slice(1),
            category: category.charAt(0).toUpperCase() + category.slice(1)
        }).sort({ rating: -1 });

        console.log(checkData);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
