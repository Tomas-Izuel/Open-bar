import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const supportSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
  },
  user: {
    type: String,
    require: true,
  },
  date: {
    type: String,
    required: true,
  },
});

supportSchema.plugin(mongoosePaginate);

export const supportModel = mongoose.model("support", supportSchema);
