const Prod = require('./clases/Product.js')
const ProdManager = require('./clases/ProductManager.js')


const producto1 = new Prod.Product("Queso", "Queso en barra", 500, "a", 4564, 300);

const producto2 = new Prod.Product(
  "Chocolate",
  "Chocolate negro",
  100,
  "b",
  3030,
  700
);

const producto3 = new Prod.Product("Queso cremoso", "Queso cremoso", 400, "c", 4564, 150);

const producto4 = new Prod.Product('Manteca', '', '', '', '', '')

const ManejadorProductos = new ProdManager.ProductManager();

console.log(ManejadorProductos.addProduct(producto1))

console.log(ManejadorProductos.addProduct(producto2))

console.log(ManejadorProductos.addProduct(producto3)) //Producto con el mismo codigo que producto 1, debe dar error

console.log(ManejadorProductos.addProduct(producto4)) //Producto con casilleros vacios, debe dar error


console.log('Metodo getProducts')
console.log(ManejadorProductos.getProdcuts())

console.log('Metodo getProductById')
console.log(ManejadorProductos.getProductById(2))

console.log('Metodo getProductById')
console.log(ManejadorProductos.getProductById(10)) //Find de un producto inexistende, debe dar error