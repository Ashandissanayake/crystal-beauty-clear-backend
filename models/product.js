import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productID : {
        type : String,
        require : true,
        unique : true
    },
    name : {
        type : String,
        require : true
    },
    altNmae : {
        type : [String],
        require : []
    },
    price : {
        type : String,
        require : true
    },
    labeledPrice : {
        type : String,
        require : true
    },
    description : {
        type : String,
        required : true
    },
    images : {
        type : String,
        require : true,
        default : ["https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg"]
    },
    stock : {
        type : Number,
        required : true
    },

})

const Product = mongoose.model("products",productSchema)
export default Product;