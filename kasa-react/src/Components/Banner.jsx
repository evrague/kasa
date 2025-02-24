import React from "react";
import Banneraccueil from"../assets/Banner1entiere.png";


export default function Banner(){
    return(
        <div className="flex position-relative">
            {/* <img src={Banneraccueil}  /> */}
            <div className="sectionheader flex"> <p className="premier-plan">Chez vous, partout et ailleurs</p></div>
            <p className="hidden-point"></p>
        </div>
    );
}
