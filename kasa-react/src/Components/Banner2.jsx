import React from "react";
import Bannerapropos from"../assets/banner2.png";


export default function Banner2(){
    return(
        <div className="bannercontainer">
            <img src={Bannerapropos} alt="image de fond" />
             <h1 className="sectionheader2">Chez vous et ailleurs</h1>
        </div>
    );
}
