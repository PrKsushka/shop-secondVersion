require("dotenv").config();
const express=require("express");
const connectDB=require("./config/db");
const productRoutes=require("./routes/productRoutes");
const productRoutes2=require("./routes/manProdRoutes");
const formRoute=require("./routes/ContactPageRoutes");
const cardPageRoute=require('./routes/cardMPgRoutes');
const commentsRoute=require('./routes/commentsRoutes');
const cors = require("cors");
const path = require("path");
connectDB();


// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

const app=express();
app.use(express.json());


app.use("/api/manproducts",productRoutes2);
app.use("/api/products",productRoutes);
app.use("/api/contacts",formRoute);
app.use("/api/card",cardPageRoute);
app.use("/api/comments",commentsRoute);
const PORT=process.env.PORT ||5000;

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));

if(process.env.NODE_ENV==="production"){
    app.use(express.static("frontend/build"));
    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname, 'frontend','build','index.html'))
    })
}