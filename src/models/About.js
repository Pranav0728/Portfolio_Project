import mongoose, { Schema } from "mongoose";

const aboutSchema = new Schema(
  {
    education: [{
        year: String,
        title: String,
        details: String
    }]
    ,
    skills : [{
        name: String,
        level: String
    }], 
    experience: [{
        period: String,
        title: String,
        details: String
    }],
    memberships: []
    ,
    languages: []
    ,
    interests: []
  },
  { timestamps: true }
);

const About =
  mongoose.models.About || mongoose.model("About", aboutSchema);

export default About;