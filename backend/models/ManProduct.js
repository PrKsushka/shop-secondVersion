const mongoose=require("mongoose");
const productSchema1=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
});
const ManProduct=mongoose.model('manproducts',productSchema1);
module.exports=ManProduct;