const mongoose = require('mongoose');

const connectToMongo = () => {
  mongoose.connect('mongodb+srv://kamranimaz:kamran.imaz.109677@cluster0.bpgz2lu.mongodb.net/', {
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
