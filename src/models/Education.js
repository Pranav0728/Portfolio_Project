import mongoose, { Schema } from "mongoose";

const eduSchema = new Schema(
  {
    year: {
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

const Education =
  mongoose.models.Education || mongoose.model("Education", eduSchema);

export default Education;