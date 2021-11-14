import React from "react";
import './carouselItem.css';
import {Link} from "react-router-dom";
const Card=({url,name,subtitle,text})=>{
    //

    return(
        <div className="cards">
            <div className="im" style={{background:`url(${url}) no-repeat`, backgroundSize:"cover"}}></div>
            <p className="little">{name}</p>
            <h3>{subtitle}</h3>
            <p>{text}</p>
            <Link to="/catalog" className='button learnMore'>Узнать больше</Link>
        </div>
    )
}
export default Card;

