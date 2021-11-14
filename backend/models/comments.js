const mongoose=require("mongoose");
const comments=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
});
const dataFromComment=mongoose.model('comments',comments);
module.exports=dataFromComment;