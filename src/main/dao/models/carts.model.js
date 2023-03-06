import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: {
    type: [
      {
        _id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
        },
      },
    ],
    required: true,
    unique: true,
  },
});

cartSchema.pre("find", function (next) {
  this.populate({ path: "cart.id" });
  next();
});

export const cartModel = mongoose.model("carts", cartSchema);
