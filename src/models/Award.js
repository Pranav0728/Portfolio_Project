import mongoose, { Schema } from "mongoose";

const awardSchema = new Schema(
  {
    title: {
        type: String,
    },
    details: {
        type: String,
    },
},
  { timestamps: true }
);

const Award =
  mongoose.models.Award || mongoose.model("Award", awardSchema);

export default Award;