import { Router } from "express";
import CartManager from "../clases/CartManager.js";

const routerCart = Router();
const cm = new CartManager("./src/storage/carts.json");

routerCart.post("/", async (req, res) => {
  const cartId = await cm.createCart();
  res.status(200).json(cartId);
});

routerCart.get("/:idCart", async (req, res) => {
  const { idCart } = req.params;
  const id = parseInt(idCart);
  const cart = await cm.getCart(id);
  if (cart) {
    const products = cart.products;
    res.json({ mesage: `Productos del carrito ${cart.cid}`, products });
  }
});

export default routerCart;
