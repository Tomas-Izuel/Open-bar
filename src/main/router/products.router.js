import { Router } from "express";
import ProductManager from "../dao/mongoManagers/ProductManager.js";

export const routerProducts = Router();
const pm = new ProductManager();

routerProducts.get("/products", async (req, res) => {
  const { limit = 10, page = 1, sort, query } = req.query;
  const products = await pm.getProducts(limit, page);
});
