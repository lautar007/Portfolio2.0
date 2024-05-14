import React, { useState } from "react";
import '../styles/Proyects.css';
import '../styles/PlasticoPry.css';
import plasticoLogo from '../images/LogoPlastico.png';
import plasticoFrame1 from '../images/plasticoFrame1.jpeg';
import clickIt from '../images/ClickIt1.png';


export default function Proyects(){

    let proyectos = []
    
    let plasticoPry = {
        titulo: "Sitio Web Plástico Estudio",
        subtitulo: "Diseño FullStack de una página web portfolio para un estudio fotográfico.",
        contenido: "Este proyecto se trató de la creación de un portal para el estudio de unos amigos míos muy talentosos. Para crearlo utilicé el stack MERN: comencé con el back-end, desarrollando un servidor con Express, generando las peticiones y estableciendo una base de datos no relacional (Mongo DB) como sistema de persistencia de datos. Una vez establecidos los modelos necesarios, empecé la estructura de una API que luego desplegué a traves de la plataforma Render.\n\n Cuando terminé con el back-end, he pensado en fuentes y paletas colores. Opté por un diseño convencional, con colores definidos donde predominá el bordó. Pensé en las funcionalidades del sitio más allá de la visualización de obras: la mensajería, links a redes, llamadas a acción, blog (en desarrollo). Para todo esto utilicé React como framework que controla las rutas del sitio. El mismo también cuenta con un sistema de administración con acceso encriptado para que solo los administradores puedan modificar el contenido a su antojo."

    }

    const [plasticBtn, setPlasticBtn] = useState(false)

    function handlePlasticoBtn(e){
        setPlasticBtn(!plasticBtn);
    }

    proyectos.push(plasticoPry)

    return(
        <div className="proyect-body">
            <h1 className="proyect-title">Ultimos Proyectos.</h1>
            <hr className="top-separator"/>
            <div className="structure">
                <div className="logo-bar">
                    <img className="proyect-logo" alt="plasticoLogo" src={plasticoLogo} onClick={handlePlasticoBtn}/>
                </div>
                <hr className="vert-separator"/>
                <div>
                    {
                        plasticBtn?
                        <div className="plasticoContent">
                            <h1 className="plasticoTitle">{proyectos[0].titulo}</h1>
                            <hr className="plasticoSeparator"/>
                            <div className="plasticoBodyCont">
                                <img className="plasticoFrame" alt="plasticoFrame" src={plasticoFrame1}/>
                                <div className="plasticoBody">
                                    <h2 className="plasticoSubtitle">{proyectos[0].subtitulo}</h2>
                                    <p className="plasticoText">{proyectos[0].contenido}</p>
                                    <p className="plasticoText">Por una cuestión de la plataforma Render, los datos pueden tardar aproximadamente un minuto en cargarse. Tenga paciencia si decide visitar la página:</p>
                                    <a href="https://plasticoestudio.com.ar/"className="plasticoLink">LINK AL SITIO</a>
                                </div>
                            </div> 
                        </div>
                        :
                        <img className="clickIt" alt="clickIt" src={clickIt}/>
                    }
                </div>
            </div>
        </div>
    )
}