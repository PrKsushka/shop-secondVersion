import React, {useEffect} from "react";
import "./NavBar.css";
import {NavLink} from 'react-router-dom';
const NavBar=()=>{

   return(
<div className="navigation">
        <ul>
                <li><NavLink to = "/">Главная</NavLink></li>
                <li><NavLink to = "/catalog">Каталог</NavLink></li>
                <li><NavLink to="/lifestyle">Lifestyle</NavLink></li>
                <li><NavLink to = "/uslugi">Услуги</NavLink></li>
                <li><NavLink to = "/about">О нас</NavLink></li>
                <li><NavLink to="/contacts">Контакты</NavLink></li>
        </ul>
</div>
)}
export default NavBar;