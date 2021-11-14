const mongoose=require("mongoose");
const dataFromCard=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
});
const Card=mongoose.model('newEl',dataFromCard);
module.exports=Card;