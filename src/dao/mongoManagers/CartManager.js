import { cartModel } from "../models/cart.model.js";

export default class CartManager {
  async createCart() {
    try {
      const c = {
        products: [],
      };
      const cart = await cartModel.create(c);
      return cart;
    } catch (err) {
      return err.message;
    }
  }

  async getCart(id) {
    try {
      const cart = await cartModel.findById(id);
      return cart;
    } catch (err) {
      return err.message;
    }
  }

  async addProduct(idCart, idProduct) {
    try {
      const cart = await cartModel.findById(id);
      cart.products.push(idProduct);
      const newCart = await cartModel.findByIdAndUpdate(idCart, {
        products: cart.products,
      });
      return newCart;
    } catch (err) {
      return err.message;
    }
  }
  async #getCarts() {
    try {
      const carts = await cartModel.find();
      return carts;
    } catch (error) {
      return error;
    }
  }
}
