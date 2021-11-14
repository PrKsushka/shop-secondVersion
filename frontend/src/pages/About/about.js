import React from "react";
import "./about.css";
const About=()=>{
    return(
        <div  style={{position:'relative', top:"70px",marginBottom:'30px'}}>
            <h2 className="ab">О НАС</h2>
            <div className="first">
                <img src='./img/team.png'/>
                    <div className="first_Right" style={{marginTop:'50px'}}>
                        <h3>Маленькая компания с большими амбициями</h3>
                        <p>
                            Коллектив HANDYMADY на рынке совсем недавно. С 2020 года мы привносим искусство в этот мир.
                            Наша цель: сделать счастливее Вас, наши дорогие клиенты. И, как следствие, от этого будем
                            счастливы и мы.
                            Наша команда стремится сделать моду доступной для каждого.
                        </p>
                    </div>
            </div>
            <div className="second" id="here">
                <div className="main_Text">
                    <h2 className='bestseller'>Наша команда</h2>
                    <p className='under'>Те самые люди, которые создают исккусство и дарят Вам частичку своего
                        сердца</p>
                </div>

                <div className="card">
                    <img src="img/m1.jpg"/>
                        <h3>Максим Андрейчук</h3>
                        <p>Создатель проекта, художник</p>
                </div>
                <div className="card">
                    <img src="img/g.jpg"/>
                        <h3>Ксения Шварц</h3>
                        <p>Девушка, которая знает о вышивке всё и даже больше. Художник</p>
                </div>
                <div className="card">
                    <img src="img/m2.jpg"/>
                        <h3>Алексей Ивашко</h3>
                        <p>Арт-дизайнер, художник</p>
                </div>
            </div>
            <div className="first">
                <div className="first_Right" style={{marginTop:'50px'}}>
                    <h3>Движение только вверх!</h3>
                    <p>
                        Каждый день мы придумываем новые дизайны и осуществляем Ваши мечты в реальность. Своё
                        вдохновение мы черпаем от Вас.
                        Наша команда нацелена только вперёд. К новым свершениям!
                    </p>
                </div>
                <img src='img/int.png'/>
            </div>
        </div>
    )
}
export default About;