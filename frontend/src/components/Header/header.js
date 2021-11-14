import React, {useEffect, useState} from "react";
import "./header.css";
const Header=({mobileDescr,title,url,subtitle,color})=>{
    const [ position, setPosition ] = useState(0);
    const onScroll = e => setPosition(window.scrollY)
    useEffect(()=>{
        window.addEventListener('scroll',onScroll)
        return()=>{
            window.removeEventListener('scroll',onScroll)
        }
    })
    return(
        <div>
            <div className="headerEl" style={{
                backgroundPositionY: position / 2,
                background: `url(${url}) no-repeat`,
                height: "100vh",
                width: "100%",
                backgroundSize: 'cover',
                position:'relative'
            }}>
                <div className="wrapped">
                    <h1>{title}</h1>
                    <p className="subtitle">{subtitle}</p>
                </div>
            </div>
            <div className="headerEl1" style={{background:color}}>
                <h2 style={{fontSize:"40px"}}>{mobileDescr}</h2>
            </div>
        </div>
    )
}
export default Header;