import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  code: {
    type: Number,
    required: true,
    unique: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
  },
});

productsSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model("products", productsSchema);
