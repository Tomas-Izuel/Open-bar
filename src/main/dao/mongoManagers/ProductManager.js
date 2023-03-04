import { productsModel } from "../models/products.model.js";
import BaseManager from "./BaseManager.js";

export default class ProductManager extends BaseManager {
  constructor() {
    super(productsModel);
  }
  async getProducts(page, limit) {
    try {
      const a = await productsModel.paginate({ limit, page });
      return products;
    } catch (err) {
      console.log(err);
    }
  }
}
