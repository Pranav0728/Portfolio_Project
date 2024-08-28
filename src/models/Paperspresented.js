import mongoose, { Schema } from "mongoose";

const papersSchema = new Schema(
  {
    authors: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    organizingInstitute: {
        type: String,
    },
    nameOfInstitute: {
        type: String,
    },
    fromDate: {
        type: String,
    },
    toDate : {
        type: String,
    },
    level: {
        type: String,
    },
  },
  { timestamps: true }
);

const Paperspresented =
  mongoose.models.PapersPresented || mongoose.model("PapersPresented", papersSchema);

export default Paperspresented;