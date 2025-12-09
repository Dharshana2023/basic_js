const mongoose = require('mongoose');

const uri = 'mongodb+srv://root:root@crud.wmo6kfp.mongodb.net/crud';

mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log("MongoDB connection error:", err);
  });
