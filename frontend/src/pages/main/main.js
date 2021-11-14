import React, {Component, useEffect, useState} from "react";
import "./main.css";
import {Link} from "react-router-dom";
import ModelBut from "../../components/Button/buttonModel";
import Header from "../../components/Header/header";
import Comments from "../../components/Comments/comments";
import Card from "../../components/CarouselItem/carouselItem";
import axios from "axios";
import ModalAct from "../../components/Modal/modal";
import Poloska from "../../components/Poloska/poloska";
const Main=(props)=> {
    const [modalActive,setModalActive]=useState(false);
    const [ position, setPosition ] = useState(0);
    const [items, setItems]=useState([]);
    const [comments, setComments]=useState([]);
    const onScroll = e => setPosition(window.scrollY)
    useEffect(()=>{
        window.addEventListener('scroll',onScroll)
        return()=>{
            window.removeEventListener('scroll',onScroll)
        }
    })
    function clickFunc(e){
        e.preventDefault();
        //console.log(information.little);
    }
    // axios.post('/api/card');
    // axios.post('/api/comments');
    // axios.get('/api/card');
    // axios.get('/api/comments');

    useEffect(async ()=>{
    await axios.get('/api/card');
    await axios.get('/api/comments');
        await fetch('/api/card')
        .then(res=>res.json())
            .then((result)=>{
                setItems(result);
            })
       await fetch('/api/comments')
            .then(res=>res.json())
            .then((elem)=>{
                setComments(elem);
            })
    })
    const urls=[
        `url("img/1.jpg")`,
        `url("img/2.jpg")`,
        `url("img/3.jpg")`
    ]
    return (
        <div>

            <Header mobileDescr={"Стиль как искусство"} url={"img/course2.png"}/>
           <div className="first">
                <img src="img/first.png" alt="firstImg"/>
                <div className="first_Right">
                    <h3>Немного о нас</h3>
                    <p>
                        Привет! Добро пожаловать в наш маленький мир, где обычную одежду и обувь превращают в
                        произведение искусства. Здесь ты можешь не только купить то, что сделали наши мастера, но ещё и
                        воплотить идеи на своих вещах.
                        И в этом мы тебе поможем. Раньше мы специализировались на одежде только для девушек, но сейчас у
                        нас появилось много интересного и для парней.
                    </p>
                    <Link to='/about' onClick={clickFunc} className='button'>Читать больше</Link>
                </div>
            </div>
            <div className="second">
                <div className="main_Text">
                    <h2 className='bestseller'>бестселлеры</h2>
                    <p className='under'>Cамые популярные товары</p>
                </div>


                    {
                        items.map((item,index) => (
                                <Card key={index} name={item.name} subtitle={item.subtitle} text={item.text} url={item.url}/>
                        ))
                    }

            </div>

    {/*<section style={{height: '300px', marginTop: '30px'}} className="parallax-window" data-parallax="scroll"*/}
    {/*         data-image-src="./img/box.png">*/}

    {/*</section>*/}




            <div className="third" style={{marginTop:'60px'}}>
                <div className="main_Text">
                    <h2 className='bestseller'>Услуги</h2>
                    <p className='under'>Уникальный дизайн на твоей одежде или обуви</p>
                </div>

                <div className="kalazg">
                    <img className="most" src='img/fashion.png' alt="girl"/>
                    <div className='rect1'></div>
                    <div className='rect2'></div>
                {/*    <div className="int_text" style={{background:`url("img/nadpis.png")`,*/}
                {/*        width:'150px',*/}
                {/*        height: '155px',*/}
                {/*        zIndex: '4',*/}
                {/*        bottom: '-82px',*/}
                {/*        right: '-139px'}}></div>*/}
                </div>
                <div className="third_right">
                    <p>
                        Ты хочешь подарить вторую жизнь старым вещам? А может быть сделать яркими и неповторимыми вещи
                        или обувь, которые только купил? Тогда тебе к нам!
                        Сделаем роспись красками по специальной технике или сделаем оригинальную вышивку на твоём
                        элементе гардероба. Реализуем любую твою идею Оставляй заявку и мы свяжемся с тобой.

                    </p>
                    <Link to="/uslugi" className="button">Услуги</Link>
                </div>
            </div>


            {/*<section style={{height: '300px', marginTop: '30px'}} className="parallax-window" data-parallax="scroll"*/}
            {/*         data-image-src="./img/box.png">*/}

            {/*</section>*/}


            <div className="fourth">
                <div className="main_Text">
                    <h2 className="bestseller">Ура! Наш новый разел!</h2>
                </div>
                <div className="fourtWrapped">
                    <div className="fourth_left">
                        <h3>Для наших дорогих мужчин</h3>
                        <p>Свершилось! Теперь у нас потихоньку появляются уже готовые товары для Вас, наши мужчины.
                            Сейчас в новом разделе ты найдёшь потрясающе-красивые джинсовые куртки. С любовью,
                            HandyMady.
                        </p>
                        <Link to="/man" className="button">Перейти</Link>
                    </div>
                    <div className="fourth_right" style={{background:`url("img/man.jpg") no-repeat`, backgroundSize:"cover"}}>

                    </div>
                </div>


            </div>
            <div className="fifthBG" style={{background:`url("img/main2.png") no-repeat`}}>
                <div className="fifth">
                    <div className="main_Text">
                        <h2 className="bestseller">Отзывы</h2>
                    </div>
                    <div className="Fifthwrapped">
                        {
                            comments.map((comment,index)=>(
                                <Comments key={index} comment={comment.comment} name={comment.name}/>
                            ))
                        }
                    </div>
                    <ModalAct active={modalActive} setActive={setModalActive}/>
                    <button className="button k" onClick={()=>setModalActive(true)}>Оставить комментарий</button>
                    {/*<Link to="/contacts" className="but">Добавить комментарий</Link>*/}
                </div>
            </div>


        </div>
    )
}


export default Main;