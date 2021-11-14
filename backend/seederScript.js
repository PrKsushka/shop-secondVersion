require('dotenv').config();
const productData=require("./data/catalog");
const productManData=require("./data/catalogMan");
const connectDB=require("./config/db");
const Product=require("./models/Product");
const ManProduct=require("./models/ManProduct");

connectDB();
const importData=async()=>{
    try{
        await Product.deleteMany({});
        await Product.insertMany(productData);

        await ManProduct.deleteMany({});
        await ManProduct.insertMany(productManData);



        console.log("Data import success");
        process.exit();
    }
    catch (err){
        console.error("Error with data import");
        process.exit(1);
    }
}
importData();