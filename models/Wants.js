import mongoose, { Schema } from "mongoose";

const wantsSchema = new Schema(
    {
        name: String,
        notes: String,
        rating: Number,
        userId: String
    },
    {
        timestamps: true
    }
)

const Wants = mongoose.models.Wants || mongoose.model("Wants", wantsSchema);

export default Wants;
