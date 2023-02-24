import { productsModel } from "../models/products.model.js";

export default class ProductManager {
  async getProducts() {
    try {
      const products = await productsModel.find().lean(); //El lean lo agregue porque sino handlebars no me dejaba representar las cosas
      return products;
    } catch (err) {
      return err.message;
    }
  }
  async addProduct(product) {
    try {
      const newProduct = await productsModel.create(product);
      return newProduct;
    } catch (err) {
      return err.message;
    }
  }

  async getProductById(id) {
    try {
      const product = await productsModel.findById(id);
      return product;
    } catch (err) {
      return err.message;
    }
  }

  async deleteProduct(id) {
    try {
      const prod = await productsModel.findByIdAndDelete(id);
      return prod;
    } catch (err) {
      return err.message;
    }
  }

  //   async updateProduct(id, product) {
  //NO ENCONTRE EL METODO PARA REALIZAR ESTA OPERACION
  //     try {
  //       const newProduct = await productsModel.
  //     } catch (err) {
  //       return err.message;
  //     }
  //   }
}
