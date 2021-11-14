const mongoose=require("mongoose");
const dataForm=new mongoose.Schema({
    nameSurname:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
});
const dataFromForm=mongoose.model('datafromform',dataForm);
module.exports=dataFromForm;