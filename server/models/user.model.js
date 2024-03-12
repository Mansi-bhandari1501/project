import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        // required: true
        default: null
    },
    role:{
      type:String,
      enum :["admin","user"]
    }
   
}, { timestamps: true })
const UserModel = mongoose.model('Users', usersSchema);
export default UserModel;