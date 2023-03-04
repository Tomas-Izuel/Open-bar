import express from "express";
import { __dirname } from "./utils/dirname.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import "./dao/daoConfig.js";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//routes
app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);
app.use("/api/messages", routerMessages);

app.listen(PORT, () => {
  console.log("");
  console.log(
    "\u001b[" +
      32 +
      "m" +
      `      * Server runing on: http://localhost:${PORT}` +
      "\u001b[0m"
  );
  console.log("");
});
