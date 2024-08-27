import mongoose, { Schema } from "mongoose";

const expSchema = new Schema(
  {
    period: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
    },
},
  { timestamps: true }
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", expSchema);

export default Experience;