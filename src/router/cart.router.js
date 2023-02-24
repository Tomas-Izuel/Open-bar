import { Router } from "express";
// import CartManager from "../dao/fileManagers/CartManager.js";
import CartManager from "../dao/mongoManagers/CartManager.js";

const routerCart = Router();
const cm = new CartManager();

routerCart.post("/", async (req, res) => {
  const cartId = await cm.createCart();
  res.status(200).json(cartId);
});

routerCart.get("/:idCart", async (req, res) => {
  const { idCart } = req.params;
  const cart = await cm.getCart(idCart);
  if (cart) {
    const products = cart.products;
    res
      .status(200)
      .json({ mesage: `Productos del carrito ${cart.cid}`, products });
  } else {
    res.status(404).json({ mesage: "cart not found" });
  }
});

routerCart.post("/:idCart/product/:idProduct", async (req, res) => {
  const { idCart, idProduct } = req.params;
  const cart = await cm.addProduct(parseInt(idCart), parseInt(idProduct));
  res.status(200).json({
    mesage: `Producto ${idProduct} del carrito ${cart.cid} agregado con exito`,
    cart,
  });
});

export default routerCart;
