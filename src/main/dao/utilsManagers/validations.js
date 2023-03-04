//Extraigo las validaciones para usarlas en mongoManagers y fileManagers

export const validateProduct = (product) => {
  if (
    //Valido que los campos no esten vacios
    product.category !== "" &&
    product.name !== "" &&
    product.description !== "" &&
    product.price !== "" &&
    product.image !== "" &&
    product.code !== "" &&
    product.stock !== "" &&
    product.status !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

export const validateMessage = (message) => {};
