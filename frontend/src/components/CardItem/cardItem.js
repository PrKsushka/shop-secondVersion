import React from "react";
import './cardItem.css';
const CardItem=({img,title,text,price})=>{
    return(
        <div className="box">
            <img src={img} alt="somethimg"/>
            <h3>{title}</h3>
            <p>{text}</p>
            <small>{price}</small>
        </div>
    )
}
export default CardItem;
