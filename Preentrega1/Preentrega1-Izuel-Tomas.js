class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }
  setId(id) {
    this.id = id;
  }
}

class ProductManager {
  constructor() {
    this.products = [];
    this.idManager = 1;
  }

  validateProduct(product) {
    let flag = false;
    this.products.forEach((producto) => { //Valido que no se repida el atributo code
      producto.code === product.code && (flag = true);
    });
    if (!flag) {
      if ( //Valido que los campos no esten vacios
        product.title !== "" &&
        product.description !== "" &&
        product.price !== "" &&
        product.thumbnail !== "" &&
        product.code !== "" &&
        product.stock !== ""
      ) {
        return true; //Si cumple todas las condiciones retorna verdadero
      } else {
        return "Error: No debe haber casilleros vacios";
      }
    } else {
      return `Error: El producto ${product.title} tiene el mismo codigo que otro producto`;
    }
  }

  addProduct(product) {
    const validacion = this.validateProduct(product)
    if (validacion === true) {
      product.setId(this.idManager);
      this.idManager += 1;
      this.products.push(product);
      return `Carga de producto ${product.title} exitosa`
    } else {
      return validacion
    }
  }

  getProdcuts(){
    return this.products
  }

  getProductById(id){
    return this.products.find(product => product.id === id)
  }
}

const producto1 = new Product("Queso", "Queso en barra", 500, "a", 4564, 300);

const producto2 = new Product(
  "Chocolate",
  "Chocolate negro",
  100,
  "b",
  3030,
  700
);

const producto3 = new Product("Queso cremoso", "Queso cremoso", 400, "c", 4564, 150);

const producto4 = new Product('', '', '', '', '', '')

const ManejadorProductos = new ProductManager();

console.log(ManejadorProductos.addProduct(producto1))

console.log(ManejadorProductos.addProduct(producto2))

console.log(ManejadorProductos.addProduct(producto3))

console.log(ManejadorProductos.addProduct(producto4))


console.log('Metodo getProducts')
console.log(ManejadorProductos.getProdcuts())

console.log('Metodo getProductById')
console.log(ManejadorProductos.getProductById(2))
