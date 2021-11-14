import React from "react";
import "./uslugi.css";
import UslugiPict from "../../components/UslugiPict/uslugiPict";
const Uslugi=()=>{
    let pathArr=[
        "img/uslugi/2.png",
        "img/uslugi/3.jpg",
        "img/uslugi/4.jpg",
        "img/uslugi/5.jpg"
    ]
    return(
        <div style={{position:'relative', top:"70px"}}>
            <h2 className="ab">УСЛУГИ</h2>
            <div className="first">
                <img src='img/uslugi1.png'/>
                    <div className="first_Right" style={{marginTop:'50px'}}>
                        <h3>Сделаем твою обувь яркими и уникальными</h3>
                        <p>
                            У тебя есть обувь, которая с течением времени стала не очень привлекательной? А, может быть,
                            ты купил новые кроссовки и тебе хочется сделать их более привлекательными? Тогда мы поможем
                            тебе!
                            Всё просто: ты присылаешь свою обувь нам, а мы присылаем обновлённую обувь тебе с гарантиями
                            и дополнительными договорённостями, что никто никого не обманет. Мы используем качественные
                            краски и лаки, чтобы рисунок не смывался и не портился.
                        </p>
                    </div>
            </div>
            <div className="first">
                <div className="first_Right" style={{marginTop:'50px'}}>
                    <h3>Выделяйся на фоне остальных</h3>
                    <p>
                        Сделай свои вещи ярче! Возможно, у тебя есть какие-то старые вещи, которые рука не поднимается
                        выкинуть. Или ты купил обычную вещь, но тебе хочется выделяться, а не быть как все? Специальными
                        красками мы распишем любую вещь из твоего гардероба.
                    </p>
                </div>
                <img src='img/uslugi2.png'/>
            </div>
            <div className="first tk">
                <img src='img/uslugi3.png'/>
                    <div className="first_Right" style={{marginTop:'50px'}}>
                        <h3>Из обычных вещей в произведение искусства</h3>
                        <p>
                            А, если расписанные вещи тебе не по вкусу, тогда выбирай вышитый рисунок. Вышивка в технике
                            простой крест или гладь преобразят любой элемент гардероба.
                        </p>
                    </div>
            </div>
            <div className="BigBox">
                <div className="leftPicture" style={{background:`url("img/uslugi/1.jpg") no-repeat`}}>

                </div>
                <div className="rightPicture">
                    {
                        pathArr.map((k,index) => {
                           return <UslugiPict key={index} path={k}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Uslugi;