import React from "react";
import "./lifestyleCard.css";
const LifestyleCard=({heading, transcrintion,infoPart,znach,znach1,url1,url2,styleName,none,top})=>{
  return(
      <div className="secondBox">
          <h2>{heading}</h2>
          <div className="firstPart">
              <h3>{transcrintion}</h3>
              <p>{infoPart}</p>
          </div>
          <div className={styleName}>
              <img src={url1} className={znach}/>
              <img src={url2} className={znach1}/>
          </div>
      </div>
  )
}
export default  LifestyleCard;