import mongoose, { Schema } from "mongoose";

const articleSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    publishedIn: {
        type: String,
    },
    pageNo: {
        type: String,
    },
    date: {
        type: String,
    },
    level : {
        type: String,
    },
  },
  { timestamps: true }
);

const Article =
  mongoose.models.Article || mongoose.model("Article", articleSchema);

export default Article;