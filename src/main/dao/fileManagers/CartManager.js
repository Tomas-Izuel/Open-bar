import fs from "fs";
import { __dirname } from "../../utils/dirname";

const path = __dirname + "/src/main/db/carts.json";

export default class CartManager {
  async createCart() {
    const cart = {
      cid: Math.floor(Math.random() * 100000),
      products: [],
    };
    if (fs.existsSync(path)) {
      const carts = await this.#getCarts();
      carts.push(cart);
      await fs.promises.writeFile(path, JSON.stringify(carts, null));
      return cart.cid;
    } else {
      await fs.writeFile(path, "[]");
      await fs.promises.writeFile(path, JSON.stringify(carts, null));
      return cart.id;
    }
  }

  async #getCarts() {
    if (fs.existsSync(path)) {
      const carts = await fs.promises.readFile(path, "utf8");
      return JSON.parse(carts);
    } else {
      fs.promises.writeFile(path, []);
      return [];
    }
  }

  async #updateCart(cart) {
    let carts = await this.#getCarts();
    carts.forEach((c) => {
      if (c.cid === cart.cid) {
        c.products = cart.products;
      }
    });
    await fs.promises.writeFile(path, JSON.stringify(carts, null));
  }

  async getCart(id) {
    if (fs.existsSync(path)) {
      const carts = await fs.promises.readFile(path, "utf8");
      return JSON.parse(carts).find((c) => c.cid === id);
    } else {
      return false;
    }
  }

  async addProduct(idCart, idProduct) {
    const cart = await this.getCart(idCart);
    let flag = false;
    cart.products.forEach((product) => {
      if (product.id === idProduct) {
        product.quantity += 1;
        flag = true;
      }
    });
    if (!flag) {
      cart.products.push({ id: idProduct, quantity: 1 });
    }
    await this.#updateCart(cart);
    return cart;
  }
}
