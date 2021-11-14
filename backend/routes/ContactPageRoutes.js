const express=require("express");
const router=express.Router();
const dataForm=require("../models/ContactPageForm");

router.route("/").post((req,res)=>{
    const nameSurname=req.body.nameSurname;
    const telephone=req.body.telephone;
    const email=req.body.email;
    const text=req.body.text;
    const newData=new dataForm({
        nameSurname,
        telephone,
        email,
        text
    })
    newData.save();
})

module.exports=router;