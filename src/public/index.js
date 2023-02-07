const socket = io();

const createProductForm = document.getElementById("createProductForm");
const category = document.getElementById("category");
const name = document.getElementById("name");
const price = document.getElementById("price");
const image = document.getElementById("image");
const code = document.getElementById("code");
const stock = document.getElementById("stock");

createProductForm.onsubmit = (e) => {
  e.preventDefault();
  const product = {
    category: category.value,
    name: name.value,
    price: price.value,
    image: image.value,
    code: code.value,
    stock: stock.value,
  };
};

socket.on("sendProduct", (data) => {
  console.log(data);
});
