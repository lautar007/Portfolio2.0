import React from "react";
import "../styles/Home.css";
import fondo from "../images/portfolioIMG.png";
import todoIcon from "../images/checked.png";
import pokedexIcon from "../images/pokedex.png";
import { Link } from "react-router-dom";

export default function Home(){

    const lenguage = localStorage.getItem("lenguage") || "ESP";

    return (
      <div>
        <img className="back-img" src={fondo} alt="fondo"></img>
        <div className="fullName">
          <h1 className="name">LauTarO</h1>
          <h1 className="surname">NuñeZ</h1>
        </div>
        {lenguage === "ESP" ? (
          <h3 className="miniproyectsTitle">Mini Proyectos:</h3>
        ) : (
          <h3 className="miniproyectsTitle">Mini Proyects:</h3>
        )}
        <div className="miniproyects">
          <Link to="/ToDo">
            <div className="Mproyect">
                <img src={todoIcon} className="miniproyectImg" alt="ToDo"/>
                <p class="MPlabel">To Do List</p>
            </div>
          </Link>
          <Link to="https://pokedex-liart-alpha.vercel.app/">
            <div className="Mproyect">
                <img src={pokedexIcon} className="miniproyectImg" alt="ToDo"/>
                <p class="MPlabel">Pokedex</p>
            </div>
          </Link>
        </div>
      </div>
    );
}