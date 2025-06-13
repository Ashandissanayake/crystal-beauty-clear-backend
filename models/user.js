import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        require : true,
        unique : true
    },
    firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },
    role : {
        type : String,
        require : true,
        default : "user"
    },password : {
        type : String,
        require : true
    },
    phone : {
        type : String,
        require : true,
        default : "Not given"
    },
    isDisabled : {
        type : String,
        require : true,
        default : false
    },
    isEmailVerified : {
        type : String,
        require : true,
        default : false
    },


})

const User = mongoose.model("users",userSchema)
export default User;