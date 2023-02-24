import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import { Server } from "socket.io";
import routerProducts from "./router/products.router.js";
import routerCart from "./router/cart.router.js";
import "./dao/dbConfig.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);

const httpServer = app.listen(PORT, () => {
  //Los setTimeout no tienen ninguna utilidad, lo hice para probar los colores de la consola
  setTimeout(() => {
    console.log("");
    console.log(
      "\u001b[" +
        32 +
        "m" +
        `      * Server runing on: http://localhost:${PORT}` +
        "\u001b[0m"
    );
    console.log("");
  }, 3500);
});

export const socketServer = new Server(httpServer);
