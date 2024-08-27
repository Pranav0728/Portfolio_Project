import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    name: { //admin
      type: String,
      required: true,
    },
    email: {  //admin@123
      type: String,
      required: true,
    },
    password: {  //admin@123
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
