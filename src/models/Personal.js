import mongoose, { Schema } from "mongoose";

const personalSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    subHeader: {
      type: String,
    },
    image: {
        type: String,
    },
    email: {
        type: String,
    },
    degree: {
        type: String,
    },
    phone : {
        type: Number,
    },
    city: {
        type: String,
    },
  },
  { timestamps: true }
);

const Personal =
  mongoose.models.Personal || mongoose.model("Personal", personalSchema);

export default Personal;