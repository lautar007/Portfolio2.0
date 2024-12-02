import React, { useState } from "react";
import '../styles/Proyects.css';
import '../styles/PlasticoPry.css';
import plasticoLogo from '../images/LogoPlastico.png';
import plasticoFrame1 from '../images/plasticoFrame1.jpeg';
import clickIt from '../images/ClickIt1.png';


export default function Proyects(){
    const lenguage = localStorage.getItem("lenguage") || "ESP";

    const proyectosESP = [
        {
            titulo: "Sitio Web Plástico Estudio",
            subtitulo: "Diseño FullStack de una página web portfolio para un estudio fotográfico.",
            contenido: "Este proyecto se trató de la creación de un portal para el estudio de unos amigos míos muy talentosos. Para crearlo utilicé el stack MERN: comencé con el back-end, desarrollando un servidor con Express, generando las peticiones y estableciendo una base de datos no relacional (Mongo DB) como sistema de persistencia de datos. Una vez establecidos los modelos necesarios, empecé la estructura de una API que luego desplegué a traves de la plataforma Render.\n\n Cuando terminé con el back-end, he pensado en fuentes y paletas colores. Opté por un diseño convencional, con colores definidos donde predominá el bordó. Pensé en las funcionalidades del sitio más allá de la visualización de obras: la mensajería, links a redes, llamadas a acción, blog (en desarrollo). Para todo esto utilicé React como framework que controla las rutas del sitio. El mismo también cuenta con un sistema de administración con acceso encriptado para que solo los administradores puedan modificar el contenido a su antojo."
        }
    ]

    const proyectosENG = [
        {
            titulo: "Plástico Estudio Web Site",
            subtitulo: "FullStack design of a portfolio website for a photography studio.",
            contenido: "This project involved the creation of a portal for my very talented friends’ photography studio. To build it, I used the MERN stack. I started with the back-end, developing a server with Express, handling requests, and setting up a non-relational database (MongoDB) as the data persistence system. Once the necessary models were defined, I began structuring an API, which I later deployed using the Render platform. After finishing the back-end, I focused on fonts and color palettes. I opted for a conventional design with a defined color scheme, predominantly featuring burgundy. I thought about the site's functionalities beyond displaying works, such as messaging, social media links, call-to-action buttons, and a blog (still in development). For all of this, I used React as the framework to manage the site's routes. The site also includes an administration system with encrypted access, ensuring that only administrators can freely modify its content."
        }
    ] 
    

    const [plasticBtn, setPlasticBtn] = useState(false)

    function handlePlasticoBtn(e){
        setPlasticBtn(!plasticBtn);
    }

    return(
        <div className="proyect-body">
            {lenguage === 'ESP'?
                <h1 className="proyect-title">Ultimos Proyectos.</h1>
                :
                <h1 className="proyect-title">Last Proyects.</h1>
            }
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
                            {lenguage === 'ESP'?
                                <h1 className="plasticoTitle">{proyectosESP[0].titulo}.</h1>
                                :
                                <h1 className="plasticoTitle">{proyectosENG[0].titulo}</h1>
                            }
                            <hr className="plasticoSeparator"/>
                            <div className="plasticoBodyCont">
                                <img className="plasticoFrame" alt="plasticoFrame" src={plasticoFrame1}/>
                                {lenguage === 'ESP' ?
                                    <div className="plasticoBody">
                                        <h2 className="plasticoSubtitle">{proyectosESP[0].subtitulo}</h2>
                                        <p className="plasticoText">{proyectosESP[0].contenido}</p>
                                        <p className="plasticoText">Por una cuestión de la plataforma Render, los datos pueden tardar aproximadamente un minuto en cargarse. Tenga paciencia si decide visitar la página:</p>
                                        <a href="https://plasticoestudio.com.ar/"className="plasticoLink">LINK AL SITIO</a>
                                    </div>
                                    :
                                    <div className="plasticoBody">
                                        <h2 className="plasticoSubtitle">{proyectosENG[0].subtitulo}</h2>
                                        <p className="plasticoText">{proyectosENG[0].contenido}</p>
                                        <p className="plasticoText">Due to a limitation of the Render platform, the data may take approximately one minute to load. Please be patient if you decide to visit the page.</p>
                                        <a href="https://plasticoestudio.com.ar/"className="plasticoLink">LINK TO THE SITE</a>
                                    </div>
                                }
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