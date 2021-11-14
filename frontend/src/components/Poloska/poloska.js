import React, {useEffect, useState} from "react";
import "./poloska.css";
const Poloska=({src})=>{
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setOffset(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])
    return(
        <div>
                <div
                    className="hero"
                    style={{
                        backgroundPositionY: offset / 2,
                        background:`url(${src})`,
                        backgroundSize:'cover',
                        backgroundRepeat:'no-repeat'
                    }}
                />
        </div>
    )
}
export default Poloska;
