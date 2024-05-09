import React, { useState } from "react";
import "../styles/Home.css";
import fondo from "../images/portfolioIMG.png";

export default function Home(){

    const [lenguaje, setLenguaje] = useState("ES");
    
    return(
       <div>
            <img className="back-img" src={fondo} alt="fondo"></img>
            <div className="fullName">
               <h1 className="name">LauTarO</h1> 
               <h1 className="surname">NuñeZ</h1>
           </div>
       </div> 
    )
}