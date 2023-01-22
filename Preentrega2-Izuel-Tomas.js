const ProdManager = require('./src/clases/ProductManager.js')

const pm = new ProdManager.ProductManager('./storage/products.json');

console.log(pm.getProducts())


//Por cuestion de responsabilidad me parecio una mejor opcion que el Product Manager fuese el que crea los productos, porque no me parecia adecuado que el usuario tenga que crear los objetos de producto para pasarlos. Por eso se pasan todos los valores, y el product manager se encarga de crear Product y agregarlo al .json, ademas de las validaciones correspondientes

console.log(pm.addProduct("Scotish", "Una cerveza roja con un gusto unico", 700, "https://images.pexels.com/photos/1672304/pexels-photo-1672304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 1001, 250))

console.log(pm.getProductById(2)) //Muestra por consola el producto

setTimeout(() => { //El setTimeout es para poder apreciar el cambio en el .json
  console.log(pm.updateProduct(2, 'title', 'Session Ipa'))
}, 2000)

setTimeout(() => { //De igual manera aca
  console.log(pm.deleteProduct(2))
}, 5000)