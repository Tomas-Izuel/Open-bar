import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: {
    type: Array,
  },
});

export const cartModel = mongoose.model("carts", cartSchema);
