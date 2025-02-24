import React from "react";
import {Link} from 'react-router-dom';
import Logo from "../assets/logokasa.png"



export default function Nav(){
    return(
        <div className="navbar">
            
        <img src={Logo} alt="logokasa" width="130" height="50" />
        <div className="navliens">
            <Link to="/"> Accueil </Link>
            <Link to="/Apropos"> A propos </Link>
        </div>
        </div>
    )

}