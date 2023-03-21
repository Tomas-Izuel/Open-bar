import { productsModel } from "../models/products.model.js";

export default class ProductManager {
  async getProducts(limit, page, sort, category) {
    try {
      const filter = {};
      if (category) filter.category = category;
      const options = {
        limit: limit,
        page: page,
        sort: { price: sort },
        category: category,
        lean: true,
      };
      const products = await productsModel.paginate(filter, options);
      return products;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getProductById(productoId) {
    try {
      const productIdDB = await productsModel.findById(productoId);
      return productIdDB;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async addProduct(product) {
    try {
      const newProduct = await productsModel.create(product);
      return newProduct;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async deleteProduct(id) {
    try {
      const deletedProduct = await productsModel.findByIdAndDelete(id);
      return deletedProduct;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async updateProduct(id, newProduct) {
    try {
      const updatedProduct = await productsModel.findByIdAndUpdate(
        id,
        {
          title: newProduct.title,
          description: newProduct.description,
          price: newProduct.price,
          code: newProduct.code,
          stock: newProduct.stock,
        },
        { new: true }
      );
      return updatedProduct;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
