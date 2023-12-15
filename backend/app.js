const dotenv=require("dotenv")
const express=require('express');
const connectToMongo = require('./models/mongodb');
const cors=require('cors')
const userSchema=require('./models/cedb')
const app=express();
const port=80;
//This function will connect mongodb with nodejs using mongoose....
connectToMongo()
//This is Users Database which I created for the purpose to save the data from the post review.....
userSchema()
//this function was used to send the frontend response to save it in the database....
app.use(cors())
//app.use method.......which is used for routing to that particular API or endpoint....
app.use(express.json())

dotenv.config({path:'./config.env'})
app.use('/routes/cedb',require('./routes/cedb'))
app.use(process.env.SEARCH_DATA,require('./routes/SearchData'))
app.use('/routes/displayDb',require('./routes/displayDb'))
app.listen(port,()=>{
    console.log(`The Port is listening at ${port}`);
})
