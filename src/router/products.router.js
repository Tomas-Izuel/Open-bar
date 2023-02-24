import { Router } from "express";
// import ProductManager from "../dao/fileManagers/ProductManager.js";
import ProductManager from "../dao/mongoManagers/ProductManager.js";

const routerProducts = Router();
const pm = new ProductManager();

routerProducts.get("/", async (req, res) => {
  const { limit } = req.query;
  const products = await pm.getProducts(parseInt());
  const newProduct = products.slice(0, limit);
  res.render("home", { products: newProduct });
});

routerProducts.get("/:idProduct", async (req, res) => {
  const { idProduct } = req.params;
  const product = await pm.getProductById(idProduct);
  res.status(200).render("home", { product: product });
});

routerProducts.post("/", async (req, res) => {
  const prod = req.body;
  res.json(await pm.addProduct(prod));
});

routerProducts.delete("/:idProduct", async (req, res) => {
  const { idProduct } = req.params;
  const id = parseInt(idProduct);
  res.json(await pm.deleteProduct(id));
});

routerProducts.put("/:idProduct", async (req, res) => {
  const { idProduct } = req.params;
  const prod = req.body;
  res.json(await pm.updateProduct(parseInt(idProduct), prod));
});

export default routerProducts;
