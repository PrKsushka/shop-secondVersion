const express=require("express");
const router=express.Router();
const {getMansProducts}=require("../controller/productControllers");

router.get("/",getMansProducts);
module.exports=router;
