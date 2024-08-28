import mongoose, { Schema } from "mongoose";

const extentionSchema = new Schema(
  {
    name: {
        type: String,
    },
    details: {
        type: String,
    },
},
  { timestamps: true }
);

const Extentionactivitiy =
  mongoose.models.ExtentionActivitiy || mongoose.model("ExtentionActivitiy", extentionSchema);

export default Extentionactivitiy;