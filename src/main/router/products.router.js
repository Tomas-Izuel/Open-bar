import { Router } from "express";
import ProductManager from "../dao/mongoManagers/ProductManager.js";

export const routerProducts = Router();
const pm = new ProductManager();

routerProducts.get("/", async (req, res) => {
  const { limit = 10, page = 1, sort, category } = req.query;
  const products = await pm.getProducts(limit, page, sort, category);
  const response = {
    status: "success",
    payload: products.docs,
    totalPages: products.totalPages,
    page: products.page,
    prevPage: products.prevPage,
    nextPage: products.nextPage,
    hasPrevPage: products.hasPrevPage,
    hasNextPage: products.hasNextPage,
    prevLink: products.prevPage
      ? `https://localhost8080/api/products?page=${products.prevPage}`
      : null,
    nextLink: products.nextPage
      ? `https://localhost8080/api/products?page=${products.nextPage}`
      : null,
  };
  res.status(200).json(response);
});

routerProducts.get("/:pid", async (req, res) => {
  const product = await pm.getProductById(req.params.pid);
  res.status(200).json(product);
});
