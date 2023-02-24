import mongoose from "mongoose";

const URI =
  "mongodb+srv://tomasizuel:rambomax1@cluster0.jrcnpzo.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(URI, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to Mongoose");
  }
});
