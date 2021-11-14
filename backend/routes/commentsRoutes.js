const express=require('express');
const router=express.Router();
const dataFromComment=require('../models/comments');
const {getComments}=require('../controller/productControllers');
router.route("/").post((req,res)=>{
    const commentData=[
        {
            name:"Анастасия Садовникова",
            comment:"Хочу выразить свою благодарность ребятам! Потрясающее качество! Заказывала роспись по моим кроссовкам. Очень красиво и самое главное носибельно."
        },
        {
            name:"Екатерина Юдо",
            comment:"Приобрела здесь джинсы. Качество на уровне. Заказала, но размер мне не подошёл. Связалась с ребятами и без проблем поменяла размер. Спасибо!"
        },
        {
            name:"Алексей Корчагин",
            comment:"Попросил расписать кожаную куртку. Сделали всё чётко. Спасибо! Я в восторге! Закажу ещё обязательно что-нибудь для своей девушки."
        }
    ]
    const name=req.body.nameSurnameComments;
    const comment=req.body.commentEl;
    console.log(name,comment);
    const data=new dataFromComment({
        name,
        comment
    })
    // commentData.forEach(comm=>{
    //     dataFromComment.create(comm);
    // })
    data.save();
    //dataFromComment.create(dataComment);
});



router.get("/",getComments);
module.exports=router;
