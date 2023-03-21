import express from "express";
import { __dirname } from "./dirname.js";
import handlebars from "express-handlebars";
import passport from "passport";
import "./passport/passportStrategies.js";

import { routerProducts } from "./router/products.router.js";
import { routerCart } from "./router/carts.router.js";
import { routerSupport } from "./router/support.router.js";
import { routerViews } from "./router/views.router.js";
import { routesAuth } from "./router/auth.routes.js";

import { Server } from "socket.io";
import "./dao/daoConfig.js";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import session from "express-session";
const app = express();

const PORT = process.env.PORT || 8080;

const MONGOURL =
  process.env.MONGOURL ||
  "mongodb+srv://tomasizuel:coderpassword@cluster0.jrcnpzo.mongodb.net/ecommerce?retryWrites=true&w=majority";
const SECRET = process.env.SECRET || "secretoTomy";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(cookieParser(SECRET));

//file session
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: MONGOURL,
      mongoOptions: { useNewUrlParser: true, useUnifiedTopology: true },
    }),
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 10000,
    },
  })
);

//Handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

//Passport
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);
app.use("/api/support", routerSupport);
app.use("/views", routerViews);
app.use("/auth", routesAuth);

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
