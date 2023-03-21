import { Router } from "express";
import CartManager from "../dao/mongoManagers/CartManager.js";

export const routerCart = Router();
const cm = new CartManager();

routerCart.post("/", async (req, res) => {
  const cart = await cm.createCart();
  if (cart) {
    res.status(201).json(cart);
  } else {
    res
      .status(500)
      .send({ message: "An error occurred while creating a cart" });
  }
});

routerCart.get("/", async (req, res) => {
  const carts = await cm.getCarts();
  if (carts) {
    res.status(200).json(carts);
  } else {
    res.status(500).send({ message: "Cannot find any cart" });
  }
});

routerCart.get("/:cid", async (req, res) => {
  const cid = req.params.cid;
  const cart = await cm.getCartById(cid);
  if (cart) {
    res.status(200).json(cart);
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
});

routerCart.post("/:cid/product/:pid", async (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  const { quantity = 1 } = req.body;
  const cart = await cm.addProductToCart(cid, pid, quantity);
  if (cart) {
    res.status(200).json(cart);
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
});

routerCart.delete("/:cid/product/:pid", async (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  const newCart = await cm.deleteCartProductById(cid, pid);
  if (newCart) {
    res.status(200).json(newCart);
  } else {
    res.status(404).send({ message: "Cart or product not found" });
  }
});

routerCart.delete("/:cid", async (req, res) => {
  const cid = req.params.cid;
  const emptyCart = await cm.emptyCart(cid);
  if (emptyCart) {
    res.status(200).json(emptyCart);
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
});

routerCart.put("/:cid/product/:pid", async (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  const { quantity } = req.body;
  const newCart = await cm.setQuantityProduct(cid, pid, quantity);
  if (newCart) {
    res.status(200).json(newCart);
  } else {
    res.status(404).send({ message: "Cart or product not found" });
  }
});

routerCart.put("/:cid", async (req, res) => {
  const cid = req.params.cid;
  const { products } = req.body;
  const editedCart = await cm.editCart(cid, products);
  if (editedCart) {
    res.status(200).json(editedCart);
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
});
