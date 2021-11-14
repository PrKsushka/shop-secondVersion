import React from "react";
import './footer.css';
import {NavLink,Link} from "react-router-dom";
const Footer=()=>{
    return(
        <footer>
            <p>2020 HANDYMADY</p>
            <ul className="footer">
                <li><NavLink to="/">Главная</NavLink></li>
                <li><NavLink to="/catalog">Каталог</NavLink></li>
                <li><NavLink to="/woman">Женщинам</NavLink></li>
                <li><NavLink to="/man">Мужчинам</NavLink></li>
                <li><NavLink to="/lifestyle">Lifestyle</NavLink></li>
                <li><NavLink to="/uslugi">Услуги</NavLink></li>
                <li><NavLink to="/about">О нас</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
            </ul>
            {/*<div className="metka">*/}
            {/*    <Link to="#top" className="vverh">Вверх</Link>*/}
            {/*</div>*/}
        </footer>
    )
}
export default Footer;