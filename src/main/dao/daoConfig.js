import mongoose from "mongoose";

const URI =
  "mongodb+srv://tomasizuel:coderpassword@cluster0.jrcnpzo.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;
console.log(
  "\u001b[" + 36 + "m" + `[mongoose] connected to Mongo Atlas✅` + "\u001b[0m"
);

// Bind connection to error event (to get notification of connection errors)
db.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});
