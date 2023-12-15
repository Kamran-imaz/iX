const express = require('express');
const user = require('../models/cedb');
const router = express.Router();

router.post('/', async (req, res) => {
  const { data } = req.body;

  // Create a regular expression to match the beginning of the field values
  const regexPattern = new RegExp(`^${data}`, 'i'); // 'i' for case-insensitive search

  const checkData = await user.find({
    $or: [
      { state: { $regex: regexPattern } },
      { city: { $regex: regexPattern } },
      { category: { $regex: regexPattern } },
      { categoryName: { $regex: regexPattern } }
    ]
  });

  console.log('Matching documents:', checkData);
  
  res.json({
    message: checkData
  });
});

module.exports = router;
