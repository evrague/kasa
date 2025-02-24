import React from "react";
import Nav from "./Nav";
import Footer from "./footer";
import { Link } from "react-router-dom";


export default function Error404(){
    return (
        <div>

            <Nav/>

            <div className="flex flex-direction-column ">
                <p className="message-404">404</p>
                <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
                <Link className="retour-accueil" to="/">Retouner sur la page d'accueil</Link>
            </div>

            <Footer/>
            
        </div>
    );
}
