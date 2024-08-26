import mongoose, { Schema } from "mongoose";

const researchSchema = new Schema(
  {
    authors: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    journal: {
        type: String,
    },
    volume: {
        type: String,
    },
    monthYear: {
        type: String,
    },
    referred : {
        type: String,
    },
    issn: {
        type: String,
    },
    level: {
        type: String,

    }
  },
  { timestamps: true }
);

const Research =
  mongoose.models.Research || mongoose.model("Research", researchSchema);

export default Research;