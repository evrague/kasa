import React from "react";
import Nav from "./Nav";
import LeftImage from "../assets/gt.png";
import { useState, useEffect } from "react";
import Footer from "./footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import { useParams } from "react-router-dom";
import data from "../data.json";
import Tirroir from "./Tirroirs";


export default function Details_log(){

    const { id } = useParams();
    const logement = data.find( (item) => item.id === id );
    const rating_max = [" ", " ",  " ",  " ", " "];
    const [visible, setVisible] =  useState([false, false]);
    const [i, setI] = useState(0);

    const tirroirs = [
        {title: "Descripiton"},
        {title: "Équipements"},
    ]

    const toggleVisible = (index)=> {
        setVisible( (prev) => prev.map((v,i)=> ( i === index ? !v : v) ) );
    }

    function incrementer_i(){
        setI(i+1);
    }

    function desincrementer_i(){ 
        setI(i-1); 
    }

    useEffect(()=>{
        if (i >= logement.pictures.length ){
            setI(0);
        }
        if (i < 0){
            setI(logement.pictures.length - 1);
        }
        console.log("La veluer de i = ", i);
    },[i])

    return(
        <div className="">
            <Nav/>

            <div className="bannercontainer2">
                <div className="position-relative flex">
                    <img id="pp" src={logement.pictures[i]} alt="image de fond" />
                    
                    <div className="position-absolute w-65 top d-flex">
                        <p className="position-absolute left rotate-180"> <img onClick={()=> desincrementer_i()} width={50} height={100} src={LeftImage} alt="" srcset="" />  </p>
                        <p className="position-absolute right"> <img onClick={()=> incrementer_i()} width={50} height={100} src={LeftImage} alt="" srcset="" />  </p>
                        <p className="position-absolute middle-bottom"> {i+1}/{logement.pictures.length}  </p>
                    </div>
                </div>
                
            </div>

            <div className="flex">

                <div className="grid-2">

                    <div className="div-gauche">
                        <h5>{logement.title}</h5>
                        <p>{logement.location}</p>

                        <div className="grid-n">
                            {
                                logement.tags.map( (tag, index) => (
                                    <span className="tags">{tag}</span>
                                ) )
                            }
                        </div>
                        
                       
                      
                    </div>

                    <div className="div-droite">
                        
                        <div className="flex float-right gap-10">
                            <p className="host-name">{logement.host.name}</p>
                            <img className="host-pic" src={logement.host.picture} alt="" />
                        </div>

                        <div className="stars">
                            {
                                rating_max.map( (_, index) => (
                                    
                                    <FontAwesomeIcon 
                                        icon={faStar}
                                        style={{color: logement.rating > index ? "#fe615f" : "grey", marginRight:"10px"}}
                                        size="lg"
                                    />

                                ) )
                            }
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="grid-2 grid-cols-2 width-ajuste">

                        <div key={0} className="tirroir-details-log">
                            <Tirroir
                                title={tirroirs[0].title}
                                content={logement.description}
                                visible={visible[0]}
                                toggleVisible={() => toggleVisible(0)}
                            />
                        </div>

                        <div key={1} className="tirroir-details-log">
                        <Tirroir
                            title={tirroirs[1].title}
                            visible={visible[1]}
                            toggleVisible={() => toggleVisible(1)}
                            equipements={logement.equipments}
                        />
                        </div>
               
                </div>
            </div>
                            
            <br />
                
            <Footer/>
         
        </div>
    )

}