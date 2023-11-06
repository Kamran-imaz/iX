const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config({ path: `${__dirname}/../config.env` })
const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify:false,
    // useCreateIndex:true,
  }).then(() => {
    console.log('Mongodb Connected Successfully!!!');
  }).catch((err) => {
    console.error('MongoDB Connection Error:', err);
  });
};

module.exports = connectToMongo;