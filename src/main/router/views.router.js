import { Router } from "express";
import ProductManager from "../dao/mongoManagers/ProductManager.js";
import CartManager from "../dao/mongoManagers/CartManager.js";
import SupportManager from "../dao/mongoManagers/SupportManager.js";

export const routerViews = Router();
const pm = new ProductManager();
const cm = new CartManager();
const sm = new SupportManager();

routerViews.get("/products", async (req, res) => {
  const { limit = 10, page = 1, sort, category } = req.query;
  const products = await pm.getProducts(limit, page, sort, category);
  if (products) {
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
        ? `http://localhost:8080/views/products?page=${products.prevPage}`
        : null,
      nextLink: products.nextPage
        ? `http://localhost:8080/views/products?page=${products.nextPage}`
        : null,
    };
    const user = req.session?.email
    res.render("products", { data: response , user:user});
  } else {
    res.render("error", {});
  }
});

routerViews.get("/cart/:cid", async (req, res) => {
  const cid = req.params.cid;
  const cart = await cm.getCartById(cid);
  if (cart) {
    const products = cart.products;
    res.render("cart", { products: products, idCart: cid });
  } else {
    res.render("error", {});
  }
});

routerViews.get("/cart", async (req, res) => {
  res.render("cartHome", {});
});
