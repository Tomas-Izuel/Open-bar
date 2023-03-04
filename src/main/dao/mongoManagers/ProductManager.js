import { productsModel } from "../models/products.model.js";
import BaseManager from "./BaseManager.js";

export default class ProductManager extends BaseManager {
  constructor() {
    super(productsModel);
  }
}
