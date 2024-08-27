import mongoose, { Schema } from "mongoose";

const skillSchema = new Schema(
  {
    name: {
        type: String,
        required: true,

    },
    level: {
        type: String,
    },
},
  { timestamps: true }
);

const Skill =
  mongoose.models.Skill || mongoose.model("Skill", skillSchema);

export default Skill;