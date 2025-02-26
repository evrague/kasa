import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./footer";
import BannerApropos from "./BannerAprpos";
import Tirroir from "./Tirroirs"


export default function Apropos(){

        const [visible, setVisible] =  useState([false, false, false, false]);

        const tirroirs = [
                {title: "Fiablité", content:"Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus."},
                {title: "Respect", content:"Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus."},
                {title: "Service", content:"Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus."},
                {title: "Securité", content:"Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus."}
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


