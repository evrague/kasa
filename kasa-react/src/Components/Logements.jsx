import React from "react";
import {Link} from 'react-router-dom';
import data from '../data.json'


export default function Hotels(){
    return(
        <div className="flex bg-gris">
            <div className="cartes">
                { 
                    data.map((logement) => ( // c'est une boucle
                        <Link to={`/Details/${logement.id}`}>
                            <div className="carte">
                                <img src={logement.cover} width={340} height={340} /> 
                                <p> {logement.title} </p> 
                            </div>
                        </Link>
                    ))
                }
                
            </div>
        </div>
    );
}
