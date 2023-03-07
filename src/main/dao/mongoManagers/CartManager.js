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
      const cart = await cartModel.find({ _id: cid }).lean();
      return cart[0]; //No se porque este metodo me devuelve un arreglo con el producto
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async addProductToCart(cid, pid, quantity) {
    try {
      const cart = await cartModel.findById(cid);
      const product = {
        idProduct: pid,
        quantity: quantity,
      };
      cart.products.push(product);
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
      const newProducts = await cart.products.filter((element) => {
        if (JSON.stringify(element.idProduct).substring(1, 25) !== pid) {
          return element;
        }
      });
      if (
        newProducts.length !== cart.products.length ||
        newProducts[0] === undefined
      ) {
        if (newProducts[0]) {
          cart.products = newProducts;
        } else {
          cart.products = [];
        }
        const savedCart = await cart.save();
        return savedCart;
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
      const cart = await cartModel.findById(cid);
      cart.products = [];

      return await cart.save();
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async setQuantityProduct(cid, pid, quantity) {
    try {
      const cart = await cartModel.findById(cid);
      let flag = false;
      cart.products.forEach((element) => {
        if (JSON.stringify(element.idProduct).substring(1, 25) === pid) {
          element.quantity = quantity;
          flag = true;
        }
      });
      if (flag) {
        const newCart = await cart.save();
        return newCart;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async editCart(cid, newProducts) {
    try {
      const cart = await cartModel.findById(cid);
      cart.products = newProducts;

      const newCart = await cart.save();
      return newCart;
    } catch (error) {
      console.log(error);
    }
  }
}
