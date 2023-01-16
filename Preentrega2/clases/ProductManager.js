const fs = require("fs");
const Prod = require("./Product.js");

class ProductManager {
  constructor(path) {
    this.path = path;
  }

  #validateProduct(product) { //Este metodo es unicamente de validacion, por esto esta privado, no debe ser accesible por el usuario
    if (
      //Valido que los campos no esten vacios
      product.title !== "" &&
      product.description !== "" &&
      product.price !== "" &&
      product.thumbnail !== "" &&
      product.code !== "" &&
      product.stock !== ""
    ) {
      const products = this.getProducts();
      let flag = false;
      products.forEach((element) => {
        if (element.code === product.code) { // Valido que no se repita el codigo
          flag = true;
          return false;
        }
      });
      if (!flag) {
        return true;
      }
    } else {
      return false;
    }
  }

  getProducts() {
    if (fs.existsSync(this.path)) {
      const products = JSON.parse(fs.readFileSync(this.path, "utf8"));
      return products;
    } else {
      fs.writeFileSync(this.path, "[]");
      return fs.readFileSync(this.path, "utf8");
    }
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    const products = this.getProducts();
    //Creo el Product con los valores pasados como parametros
    const product = new Prod.Product(
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      products.length + 1 //Otorgo el id en base al largo del array
    );

    if (this.#validateProduct(product)) {
      products.push(product);
      fs.writeFileSync(this.path, JSON.stringify(products));
      return "Producto agregado con exito";
    } else {
      return "No se pudo agregar el producto";
    }
  }

  getProductById(id) {
    const products = this.getProducts();
    return products[id - 1];
  }

  deleteProduct(id) {
    const products = this.getProducts();
    const newProducts = products.filter((product) => product.id !== id); //Creo un nuevo array con los productos sin el que se desea borrar y sobreescribo el .json
    fs.writeFileSync(this.path, JSON.stringify(newProducts));
    return "Producto eliminado con exito";
  }

  updateProduct(id, selector, value) { //El usuario pasa como parametro el atributo que desea modificar, y se asigna dinamicamente a los atributos del objeto. El switch tambien me otorga cierta seguridad ya que si el usuario ingresa un valor que no corresponde a un atributo, no se creara un atributo nuevo con este valor, simplemente se ignorara.
    const products = this.getProducts();
    switch(selector) {
      case "title": products[id-1].title = value; break;
      case "description": products[id-1].description = value; break;
      case "price": products[id-1].price = value; break;
      case "thumbnail": products[id-1].thumbnail = value; break;
      case "code": products[id-1].code = value; break;
      case "stock": products[id-1].stock = value; break;
    }
    fs.writeFileSync(this.path, JSON.stringify(products))
    return 'Objeto editado correctamente'
  }
}

module.exports.ProductManager = ProductManager;
