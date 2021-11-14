const express=require("express");
const router=express.Router();
const {getProductById,getProducts}=require("../controller/productControllers");
const dataproducts=require('../models/Product');
//@desc GET all products from db
//@route GET /api/products
router.get("/",getProducts);


//@desc GET one product from db
//@route GET /api/products
router.get("/:id",getProductById);
router.route("/").post((req,res)=>{
    const title=req.body.title;
    const text=req.body.text;
    const price=req.body.price;
    const img=req.body.img;
    const dataProd=new dataproducts({
        title,
        text,
        price,
        img
    })
    dataProd.save();
})

// commentData.forEach(comm=>{
//     dataFromComment.create(comm);
// })

module.exports=router;