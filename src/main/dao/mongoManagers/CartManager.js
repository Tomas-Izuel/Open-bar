import { cartModel } from "../models/carts.model.js";

export default class CartManager {
  async createCart() {
    try {
      const cart = {
        products: [],
      };
      const newCart = await cartModel.create(cart);
      return newCart;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getCarts() {
    try {
      const carts = await cartModel.find().lean();
      return carts;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async getCartById(cid) {
    try {
      const cart = await cartModel
        .findById(cid)
        .populate({ path: "cart.id" })
        .lean();
      return cart;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async addProductToCart(cid, pid) {
    try {
      const cart = await cartModel.findById(cid);
      cart.products.push(pid);
      const updatedCart = await cart.save();
      return updatedCart;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteCartProductById(cid, pid) {
    try {
      const cart = await cartModel.findById(cid);
      const index = await cart.products.indexOf(pid);
      if (index) {
        cart.products.splice(index, 1);
        await cart.save();
        return cart;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async emptyCart(cid) {
    try {
      const cart = await this.getCartById(cid);
      cart.products = [];

      await cart.save();
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async setQuantityProduct(cid, pid, quantity) {
    try {
      const cart = await this.getCartById(cid);
      const index = await cart.products.indexOf(pid);
      if (index) {
        cart.products[index] = quantity;
        await cart.save();
        return cart;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async editCart(cid, newCart) {
    try {
      const cart = await cartModel.findOne({ _id: cid });
      if (!cart) return console.log("carrito no encontrado");

      cart.cart = newCart;

      await cart.save();
      return cart.cart;
    } catch (error) {
      console.log(error);
    }
  }
}
