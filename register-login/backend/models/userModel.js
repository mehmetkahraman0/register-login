import mongoose from "mongoose";

// create mongoDb Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

// create mongoDb model
const userModel = mongoose.model("user", userSchema);

export default userModel;