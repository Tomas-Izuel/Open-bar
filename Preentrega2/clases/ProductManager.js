const fs = require('fs')

class ProductManager {
  constructor() {
    this.idManager = 1;
  }

  validateProduct(product) {
    let flag = false;
    this.#products.forEach((producto) => {
      //Valido que no se repida el atributo code
      producto.code === product.code && (flag = true);
    });
    if (!flag) {
      if (
        //Valido que los campos no esten vacios
        product.title !== "" &&
        product.description !== "" &&
        product.price !== "" &&
        product.thumbnail !== "" &&
        product.code !== "" &&
        product.stock !== ""
      ) {
        return true; //Si cumple todas las condiciones retorna verdadero
      } else {
        return `Error: No se pudo cargar ${product.title}, no debe haber casilleros vacios`;
      }
    } else {
      return `Error: El producto ${product.title} tiene el mismo codigo que otro producto`;
    }
  }

  addProduct(product) {
    const validacion = this.validateProduct(product);
    if (validacion === true) {
      product.setId(this.idManager);
      this.idManager += 1;
      this.#products.push(product);
      return `Carga de producto ${product.title} exitosa`;
    } else {
      return validacion;
    }
  }

  async getProdcuts() {
    try{
      const products = await fs.promises.readFile('../storage/products.json', 'utf-8')
      return products
    }
    catch(err){
      console.error(err);
    }
  }

  getProductById(id) {
    return (
      this.#products.find((product) => product.id === id) ||
      "Error: Producto no encontrado"
    ); //Devuelve el producto, en caso de no encontrarlo devuelve un error
  }
}

module.exports.ProductManager = ProductManager;