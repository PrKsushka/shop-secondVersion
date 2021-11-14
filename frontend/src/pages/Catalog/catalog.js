import React from "react";
import {Link} from "react-router-dom";
import "./catalog.css";
import Header from "../../components/Header/header";
const Catalog=()=>{
    return(
        <div>
            <Header title="Каталог" subtitle="Красота в штучном экземляре только для тебя" mobileDescr={"Красота в штучном экземляре только для тебя"} url="./img/cat.png"/>
    <section>
        <Link to="/woman">
            <div className="box" style={{background:`url("img/w.jpg") no-repeat`, backgroundSize:'cover'}}>
                <h3>Женещинам</h3>
                <p>Перейти</p>
            </div>
        </Link>
        <Link to="/man">
            <div className="box1"  style={{background:`url("img/m.png") no-repeat`, backgroundSize:'cover'}}>
                <h3>Мужчинам</h3>
                <p>Перейти</p>
            </div>
        </Link>
    </section>
    <div className="banner" style={{background:`url("img/rekl.png") no-repeat`}}>
        <div className="wrapped">
            <h2>Дай своим вещам вторую жизнь</h2>
            <a href="#">Кликай и узнай как это сделать</a>
        </div>

    </div>
        </div>
    )
}
export default Catalog;