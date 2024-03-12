import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        default: null
    },
    stock: {
        type: Number,
        // required: true
        default: null
    },
    author: {
        type: String,
        default: null
    },
    description: {
        type: String,
        default: null
    },
    status:{
        type:String,
        enum :["returned", "requested" ,"issued"],
        // default: "requested"
    }

}, { timestamps: true })
const bookModel = mongoose.model('Books', bookSchema);
export default bookModel;