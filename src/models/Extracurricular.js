import mongoose, { Schema } from "mongoose";

const extraSchema = new Schema(
  {
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

const Extracurricular =
  mongoose.models.ExtraCurricular || mongoose.model("ExtraCurricular", extraSchema);

export default Extracurricular;