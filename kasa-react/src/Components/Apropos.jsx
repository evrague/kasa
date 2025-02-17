import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./footer";
import Banner2 from "./Banner2";


export default function Apropos(){

        // const [visible, setVissible] =  useState(false);
        // 0 = false
        // 1 = true
        // cdt ? resultat_si_vrai : ressultat_si_faux
        // a = 10 , b = 5
        // !(a>5) && (b<-1) ? "c'est un chat" : "c'est un chien"
        // 
        // (a>4 et b<10) = true
        // (a>4 && b<10) = true
        // (a>4 ou b>10) = true
        // (a>4 || b>10) = true
        // !true = false
        // !(a>4 ou b>10) = !true = false
        // a = false
        // if (!a) { console.log("hello") }

        // onClick = {setVisible(!false)} // visible = true
        // onClick = {setVisible(!true)} // visible = false
        // onClick = {setVisible(!false)} // visible = true
        // onClick = {setVisible(!visible)}
        // onClick = {setVisible(!visible)}
        // onClick = {setVisible(!visible)}
        // onClick = {setVisible(!visible)}

        // if (a){"est vrai"} else {"est faux"}
        // visible ? "afficher le paragraphe" : " "
        



        // if (visible) { <p> Lorcem ...... </p> }
        // if (23) { afgfiche texte}

        // 0 ou 1 = 1
        // 0 ou 0 = 0
        // 1 ou 1 = 1

        // 0 et 0 = 0
        // 1 et 1 = 1
        // 1 et 0 = 0

        // pour definir (initialiser) la valeur de message
        const [visible1, setVisible1] =  useState(false);
        const [visible2, setVisible2] =  useState(false);
        const [visible3, setVisible3] =  useState(false);
        const [visible4, setVisible4] =  useState(false);
        const [visible5, setVisible5] =  useState(false);

        return (
                <div>
                        <Nav />
                        <Banner2 />
                        <div id="test" className="tirroires flex">

                                <div className="tirroire flex">
                                        <p>Fiabilité </p>
                                        <img style={{ transform : visible1 ? 'rotate(180deg)' : ' ' }} width="20" height="20" onClick={ () => setVisible1(!visible1) } src="https://img.icons8.com/metro/20/FFFFFF/collapse-arrow.png" alt="collapse-arrow"/>      
                                </div>
                                
                                { 
                                        visible1 
                                        &&
                                        <p className="coprs-tirroir">
                                                Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, 
                                                adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo 
                                                accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus.
                                        </p>
                                }

                                <div className="tirroire flex">
                                        <p>Fiabilité </p>
                                        <img style={{ transform : visible2 ? 'rotate(180deg)' : ' ' }} width="20" height="20" onClick={ () => setVisible2(!visible2) } src="https://img.icons8.com/metro/20/FFFFFF/collapse-arrow.png" alt="collapse-arrow"/>      
                                </div>
                                
                                { 
                                        visible2 
                                        &&
                                        <p className="coprs-tirroir">
                                                Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, 
                                                adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo 
                                                accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus.
                                        </p>
                                }

                                <div className="tirroire flex">
                                        <p>Fiabilité </p>
                                        <img style={{ transform : visible3 ? 'rotate(180deg)' : ' ' }} width="20" height="20" onClick={ () => setVisible3(!visible3) } src="https://img.icons8.com/metro/20/FFFFFF/collapse-arrow.png" alt="collapse-arrow"/>      
                                </div>
                                
                                { 
                                        visible3
                                        &&
                                        <p className="coprs-tirroir">
                                                Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, 
                                                adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo 
                                                accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus.
                                        </p>
                                }

                                <div className="tirroire flex">
                                        <p>Fiabilité </p>
                                        <img style={{ transform : visible4 ? 'rotate(180deg)' : ' ' }} width="20" height="20" onClick={ () => setVisible4(!visible4) } src="https://img.icons8.com/metro/20/FFFFFF/collapse-arrow.png" alt="collapse-arrow"/>      
                                </div>
                                
                                { 
                                        visible4 
                                        &&
                                        <p className="coprs-tirroir">
                                                Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, 
                                                adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo 
                                                accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus.
                                        </p>
                                }

                                <div className="tirroire flex">
                                        <p>Fiabilité </p>
                                        <img style={{ transform : visible5 ? 'rotate(180deg)' : ' ' }} width="20" height="20" onClick={ () => setVisible5(!visible5) } src="https://img.icons8.com/metro/20/FFFFFF/collapse-arrow.png" alt="collapse-arrow"/>      
                                </div>
                                
                                { 
                                        visible5 ? 
                                        <p className="coprs-tirroir">
                                                Je suis invisible Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, 
                                                adipisci! Hic ullam repellendus ratione dolores itaque consequatur sapiente amet illo 
                                                accusantium, mollitia aspernatur. Suscipit, voluptatum reiciendis quos non dolores necessitatibus.
                                        </p> : ""
                                        
                                }         
                        </div>
                        <Footer/>
                </div>  

        )

}


