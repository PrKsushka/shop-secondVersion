const express=require('express');
const router=express.Router();
const Card=require('../models/cardMainPage');
const {getCardInfo}=require('../controller/productControllers');
router.route("/").post((req,res)=>{
    const first=new Card({
        name:'popular',
        subtitle:'Кожаная куртка "Hopeless Romantic"',
        text:'Кожаная куртка с росписью ручной работы станет отличном атрибутом твоего гардероба. Сделает твой образ неповторимым.',
        url:'img/1.jpg'
    })
    const second=new Card({
        name:'popular',
        subtitle:'Кроссовки "Creation"',
        text:"Кожаная куртка с росписью ручной работы станет отличном атрибутом твоего гардероба. Сделает твой образ неповторимым.",
        url:'img/2.jpg'
    })
    const third=new Card({
        name:"popular",
        subtitle:'Джинсы "Lolitta"',
        text:"Кожаная куртка с росписью ручной работы станет отличном атрибутом твоего гардероба. Сделает твой образ неповторимым.",
        url:'img/3.jpg'
   })
    // first.save();
    // second.save();
    // third.save();
     //Card.create([first,second,third]);
})
router.get("/",getCardInfo);
module.exports=router;