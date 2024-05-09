import React, { useState } from "react";
import "../styles/NavBar.css";
import house from '../images/houseIMG1.png';
import world from '../images/world0.png';
import { Link } from "react-router-dom";

export default function NavBar(){

    const [lengMenu, setLengMenu] = useState(false);

    function handleLengMenu(e){
        e.preventDefault();
        setLengMenu(!lengMenu);
    }

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
                    <img className="lenguageBtn" alt="botonDeIdioma" onClick={handleLengMenu} src={world}/>
            </div>  
            {
                lengMenu ? 
                <div className="lengMenu">
                    <button className="menuBtn">Español</button>
                    <button className="menuBtn">English</button>
                </div>
                :
                null
            }
       </div> 
    )
}