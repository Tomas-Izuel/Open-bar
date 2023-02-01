import express from "express";
import routerProducts from "./src/router/products.router.js";
import routerCart from "./src/router/cart.router.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/products", routerProducts);
app.use("/api/cart", routerCart);

app.listen(8080, () => {
  //Los setTimeout no tienen ninguna utilidad, lo hice para probar los colores de la consola
  console.log("\u001b[" + 34 + "m" + "Starting server..." + "\u001b[0m");
  setTimeout(() => {
    console.log("\u001b[" + 34 + "m" + "Done" + "\u001b[0m");
    setTimeout(() => {
      console.log("");
      console.log(
        "\u001b[" +
          32 +
          "m" +
          "      * Server runing on: http://localhost:8080" +
          "\u001b[0m"
      );
      console.log(
        "\u001b[" + 32 + "m" + "      * Listen on port 8080" + "\u001b[0m"
      );
      console.log("");
    }, 800);
  }, 1500);
});
