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
  const cart = await cm.addProductToCart(cid, pid);
  if (cart) {
    res.status(200).json(cart);
  } else {
    res.status(404).send({ message: "Cart not found" });
  }
});

routerCart.delete("/:cid/product/:pid", async (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  const deletedProduct = await cm.deleteProductFromCart(cid, pid);
  res.json({
    mensaje: `Producto eliminado del carrito ${cid}`,
    carrito: deletedProduct,
  });
});

routerCart.delete("/:cid", async (req, res) => {
  const cid = req.params.cid;
  const emptyCart = await cm.emptyCart(cid);
  res.json({ mensaje: `Carrito ${cid} vaciado` });
});

routerCart.put("/:cid/product/:pid", async (req, res) => {
  const cid = req.params.cid;
  const pid = req.params.pid;
  const quantity = req.body.quantity;
  //console.log('aca',quantity)
  const editedProductQty = await cm.editProductQty(cid, pid, quantity);
  res.json({ mensaje: `Producto editado: ${editedProductQty}` });
});

routerCart.put("/:cid", async (req, res) => {
  const cid = req.params.cid;
  const newCart = req.body.cart;
  console.log(newCart);
  const editedCart = await cm.editCart(cid, newCart);
  res.json({ mensaje: `Carrito editado: ${editedCart}` });
});
