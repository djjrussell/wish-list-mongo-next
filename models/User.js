import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        fname: String,
        mname: String,
        lname: String,
        userName: String,
        email: String
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;