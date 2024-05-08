import React, { useState } from "react";
import "../styles/Home.css";
import fondo from "../images/Diseño sin título (1).png";

export default function Home(){

    const [lenguaje, setLenguaje] = useState("ES");
    
    return(
       <div>
            <img className="back-img" src={fondo} alt="fondo"></img>
            <div className="fullName">
                <div className="name">
                    <h1 className="letter-L">L</h1>
                    <h1 className="letter-A1">a</h1>
                    <h1 className="letter-U1">u</h1>
                    <h1 className="letter-T">t</h1>
                    <h1 className="letter-A2">a</h1>
                    <h1 className="letter-R">r</h1>
                    <h1 className="letter-O">o</h1>
                </div>
                <div className="name">
                    <h1 className="letter-N">N</h1>
                    <h1 className="letter-U2">u</h1>
                    <h1 className="letter-Ñ">ñ</h1>
                    <h1 className="letter-E">e</h1>
                    <h1 className="letter-Z">z</h1>
                </div>
           </div>
       </div> 
    )
}