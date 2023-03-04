import fs from "fs";
import { __dirname } from "../../utils/dirname";
import { validateProduct } from "../utilsManagers/validations";

const path = __dirname + "/src/main/db/products.json";

export default class ProductManager {
  async getProducts() {
    if (fs.existsSync(path)) {
      const products = await fs.promises.readFile(path, "utf-8");
      return JSON.parse(products);
    } else {
      await fs.promises.writeFile(path, "[]");
      return await fs.promises.readFile(path, "utf8");
    }
  }

  async addProduct(product) {
    const products = await this.getProducts();
    const id = products[products.length - 1].id + 1;
    product.id = id;

    if (await validateProduct(product)) {
      products.push(product);
      await fs.promises.writeFile(
        path,
        JSON.stringify(products, null, "\t"),
        "utf-8"
      );
      return product;
    } else {
      return false;
    }
  }

  async getProductById(id) {
    const products = await this.getProducts();
    const prod = products.find((product) => product.id === id);
    return prod;
  }

  async deleteProduct(id) {
    const products = await this.getProducts();
    const newProducts = products.filter((product) => product.id !== id); //Creo un nuevo array con los productos sin el que se desea borrar y sobreescribo el .json
    await fs.promises.writeFile(path, JSON.stringify(newProducts), null);
    return newProducts;
  }

  async updateProduct(id, product) {
    //El usuario pasa como parametro el atributo que desea modificar, y se asigna dinamicamente a los atributos del objeto. El switch tambien me otorga cierta seguridad ya que si el usuario ingresa un valor que no corresponde a un atributo, no se creara un atributo nuevo con este valor, simplemente se ignorara.
    const products = await this.getProducts();
    let produ,
      flag = false;
    products.forEach((prod) => {
      if (prod.id === id) {
        produ = prod;
        flag = true;
        prod.category = product.category;
        prod.name = product.name;
        prod.price = products.price;
        prod.description = product.description;
        prod.image = product.image;
        prod.code = product.code;
        prod.stock = product.stock;
      }
    });
    if (flag) {
      await fs.promises.writeFile(path, JSON.stringify(products));
      return product;
    } else {
      return false;
    }
  }
}
