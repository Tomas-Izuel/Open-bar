import express from "express";
import { __dirname } from "./dirname.js";
import handlebars from "express-handlebars";
import { routerProducts } from "./router/products.router.js";
import { routerCart } from "./router/carts.router.js";
import { routerSupport } from "./router/support.router.js";
import { routerViews } from "./router/views.router.js";
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
app.use("/api/support", routerSupport);
app.use("/views", routerViews);

app.listen(PORT, () => {
  console.log("");
  console.log(
    "\u001b[" +
      34 +
      "m" +
      `      * Server runing on: http://localhost:${PORT}` +
      "\u001b[0m"
  );
  console.log("");
});
