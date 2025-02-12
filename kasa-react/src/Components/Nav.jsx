import React from "react";
import Logo from "../assets/logokasa.png"



export default function Nav(){
    return(
        <div className="navbar">
            
            <img src={Logo} alt="logokasa" width="130" height="50" />
           <div className="navliens">
            <a> Accueil </a>
            <a> A propos </a>
            </div>
        </div>
    )

}