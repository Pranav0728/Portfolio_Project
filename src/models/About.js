import mongoose, { Schema } from "mongoose";

const aboutSchema = new Schema(
  {
    description: {
      type: String
    },
    memberships: [String]
    ,
    languages: [String]
    ,
    interests: [String]
  },
  { timestamps: true }
);

const About =
  mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;