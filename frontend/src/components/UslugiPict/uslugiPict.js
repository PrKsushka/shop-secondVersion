import React from "react";
import "./uslugiPict.css";
const UslugiPict=(path)=>{
    path=Object.values(path).join();
    console.log(typeof path);
    return(

    <div className="ima" style={{background:`url(${path}) no-repeat`, backgroundSize:"cover"}}></div>

    )
}
export default UslugiPict;