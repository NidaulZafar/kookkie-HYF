import mongoose from "mongoose";

// import validateAllowedFields from "../util/validateAllowedFields.js";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema, "my_users");

export default User;
