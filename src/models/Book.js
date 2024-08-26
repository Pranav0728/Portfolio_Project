import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    publisher: {
      type: String,
    },
    position: {
        type: String,
    },
    title: {
        type: String,
    },
    year: {
        type: String,
    },
    referred : {
        type: String,
    },
    isbn: {
        type: String,
    },
    level: {
        type: String,

    }
  },
  { timestamps: true }
);

const Book =
  mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;