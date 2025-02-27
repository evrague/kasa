import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./footer";
import BannerApropos from "./BannerAprpos";
import Tirroir from "./Tirroirs"


export default function Apropos(){

        const [visible, setVisible] =  useState([false, false, false, false]);

        const tirroirs = [
                {title: "Fiablité", content:"Les annonces postées sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifées par nos équipes."},
                {title: "Respect", content:"La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."},
                {title: "Service", content:"La qualité du service est au coeur de notre engagement chez kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires soit empreinte de respect et de bienveillance."},
                {title: "Securité", content:"La sécurité est la priorité de kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
        ]

        const toggleVisible = (index)=> {
                setVisible( (prev) => prev.map((v,i)=> ( i === index ? !v : v) ) );
        }

        return (
                <div>
                        <Nav />
                        <BannerApropos />
                        <div id="test" className="tirroires flex">
                                {
                                        tirroirs.map( (tirroir, index) => (
                                                <Tirroir
                                                        key={index}
                                                        title={tirroir.title}
                                                        content={tirroir.content}
                                                        visible={visible[index]}
                                                        toggleVisible={()=> toggleVisible(index)}
                                                />
                                        ) )
                                }
                        </div>
                        <Footer/>
                </div>  

        )

}


