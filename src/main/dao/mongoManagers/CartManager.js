import { cartModel } from "../models/cart.model.js";
import BaseManager from "./BaseManager.js";

export default class CartManager extends BaseManager {
  constructor() {
    super(cartModel);
  }

  async newCart() {
    try {
      const cart = {
        products: [],
      };
      const cartComplete = await this.save(cart);
      return cartComplete;
    } catch (err) {
      return err.message;
    }
  }

  async getProductsByCartId(id) {
    try {
      const cart = await this.getById(id);
      return cart.products;
    } catch (err) {
      console.log(err);
    }
  }
  async addProductByIdCart(idCart, idProd) {
    try {
      const cartUpdated = await this.collection.findByIdAndUpdate(idCart, {
        $push: { products: idProd },
      });
      return cartUpdated;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteProductByIdCart(idCart, idProd) {
    try {
      const cartUpdated = await this.collection.findByIdAndUpdate(idCart, {
        $pull: { productos: idProd },
      });
      return cartUpdated;
    } catch (err) {
      console.log(err);
    }
  }
}
