import mongoose, { Schema } from "mongoose";

const committeeSchema = new Schema(
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

const Committee =
  mongoose.models.Committee || mongoose.model("Committee", committeeSchema);

export default Committee;