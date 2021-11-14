const Product=require("../models/Product");
const ManProduct=require("../models/ManProduct");
const Card=require('../models/cardMainPage');
const dataFromComment=require('../models/comments');
const getProducts=async(req,res)=>{
    try{
        const products=await Product.find({});
        res.json(products);
    }
    catch (err){
        console.error(err);
        res.status(500).json({message:"Server Error"});
    }
}

const getComments=async(req,res)=>{
    try{
        const commentsData=await dataFromComment.find();
        res.json(commentsData);
        console.log(commentsData);
    }
    catch (err){
        console.error(err);
        res.status(500).json({message:"Server Error"});
    }
}


const getCardInfo=async(req,res)=>{
    try{
        const cards=await Card.find();
        const name=req.body.name;
        const subtitle=req.body.title;
        const text=req.body.text;


        res.json(cards);
    }
    catch (err){
        console.error(err);
        res.status(500).json({message:"Server Error"});
    }
}


const getMansProducts=async(req,res)=>{
    try{
        const manproducts=await ManProduct.find({});
        res.json(manproducts);
    }
    catch (err){
        console.error(err);
        res.status(500).json({message:"Server Error"});
    }
}


const getProductById=async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id);
        res.json(product);
    }
    catch (err){
        console.error(err);
        res.status(500).json({message:"Server Error"});
    }
}


module.exports={
    getProducts,
    getCardInfo,
    getComments,
    getMansProducts,
    getProductById
}