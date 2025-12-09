const mongoose = require('mongoose');

//mongodb atlas
mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log("MongoDB connection error:", err);
  });

