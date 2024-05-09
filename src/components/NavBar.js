import React from "react";
import "../styles/NavBar.css";
import house from '../images/houseIMG1.png';
import world from '../images/world0.png';
import { Link } from "react-router-dom";

export default function NavBar(){

    return(
       <div className="navBarContent">
            <Link to="/">
                <img className="houseBtn" alt="botonDeInicio" src={house}/>
            </Link>
            <div className="navBarContent">     
                <div>
                    <Link to="/proyects">
                        <button className="menuBtn">ProyectoS</button>
                    </Link>
                    <Link to="/resume">
                        <button className="menuBtn">Cv</button>
                    </Link>
                    <Link to="/about">
                        <button className="menuBtn">Sobre mÍ</button>
                    </Link>
                </div>
                    <img className="lenguageBtn" alt="botonDeIdioma" src={world}/>
            </div>  
       </div> 
    )
}