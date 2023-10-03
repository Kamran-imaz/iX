const express=require('express')
const User=require('../models/cedb')
const router=express.Router()


router.post('/', async (req, res) => {
    try {
        const { state, city, category, categoryName, rating ,count} = req.body;
        const checkData = await User.findOne({ category, categoryName });

        if (checkData) {
            const avgRating=await (parseFloat(checkData.rating)+parseFloat(rating))/2
            const Count=await checkData.count+1
            const update=await User.updateOne({category,categoryName},{$set:{rating:avgRating,count:Count}})
            console.log(update)
            
        } else {
            const user = new User({ state, city, category, categoryName, rating });
            await user.save();
            console.log('Saved Successfully!!!');
        }

        res.send('Operation completed successfully');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports=router 
{/* This is a very Good Simple Machine and it has a lot of features as it is good for our health */}