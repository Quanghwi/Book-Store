import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        minLength: 5,
    },
    email: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: 'customer'
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true, versionKey: false })


export default mongoose.model("User", userSchema)