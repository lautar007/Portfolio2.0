import React, { useState } from "react";
import '../styles/Resume.css';
import plasticoLogo from '../images/LogoPlastico.png';
import CGLogo from '../images/CGLogo.jpg';
import EXPLogo from '../images/expressioncloud_logo.jpg';

export default function Resume(){

    let worksES = [
        {
            titulo: "Plástico Estudio - sitio web v2.0.0",
            logo: plasticoLogo,
            body: "Rediseño de una página web portfolio para estudio fotográfico. Se comenzó desde una versión anterior, con una estructura ya definida. Se mejoró el sistema de persistencia de datos, utilizando una base de datos no relacional (MongoDB). Se modernizó el diseño del sitio dándole más minimalismo y haciendo más dinámica la navegación entre páginas. El stack utilizado fue MERN."
        },
        {
            titulo: "Coding Giants España - Profesor de programación",
            logo: CGLogo,
            body: "Cursos de programación, individuales o de grupos reducidos, para adolescentes y niños. La empresa ofrece cursos donde se enseña a lenguajes como Python o C# de forma didáctica con la inclusión de plataformas y videojuegos como Scratch, Minecraft y Roblox. Mi tarea consistía en impartir clases sobre bases de lenguaje de programación."
        },
        {
            titulo: "Expresia Canadá - Automatización de sitio web",
            logo: EXPLogo,
            body: "La empresa ofrece sitios web personalizables que se pueden editar sin código. Para ello, mi tarea consisitió en utilizar el sistema de expresia para hacer que el sistema de edición impacte correctamente en el código del sitio, automatizándolo. Este trabajo requirió aprender la documentación para comprender el funcionamiento de la plataforma y su API."
        }
    ]

    const [PV2, setPV2] = useState(false);
    const [Giganci, setGiganci] = useState(false);
    const [expresia, setExpresia] = useState(false);

    return(
        <div className="proyect-body">
            <h1 className="proyect-title">Hoja De vidA.</h1>
            <hr className="top-separator"/>
            <div className="works-up">
                <div 
                className={`workCard${PV2 ? "PV2hovered" : ""}`} 
                onMouseEnter={() => setPV2(true)} 
                onMouseLeave={() => setPV2(false)}
                >
                    <img className="workLogoPV2" alt="plasticoLogo" src={worksES[0].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[0].titulo}:</h2>
                        <p className="workBody">{worksES[0].body}</p>
                    </div>
                </div>
                <div 
                className={`workCard${expresia ? "EXPhovered" : ""}`} 
                onMouseEnter={() => setExpresia(true)} 
                onMouseLeave={() => setExpresia(false)}
                >
                    <img className="workLogoEXP" alt="plasticoLogo" src={worksES[0].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[0].titulo}:</h2>
                        <p className="workBody">{worksES[0].body}</p>
                    </div>
                </div>
            </div>
            <div className="works-down">
                <div 
                className={`workCard${Giganci ? "CGhovered" : ""}`} 
                onMouseEnter={() => setGiganci(true)} 
                onMouseLeave={() => setGiganci(false)}
                >
                    <img className="workLogoGiganci" alt="plasticoLogo" src={worksES[1].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[0].titulo}:</h2>
                        <p className="workBody">{worksES[0].body}</p>
                    </div>
                </div>
            </div>
            <div className="time-line">
                <h2 
                className={`PlasticoV2${PV2 ? 'hovered' : ''}`} 
                onMouseEnter={() => setPV2(true)}
                onMouseLeave={() => setPV2(false)}
                >mar.2024/abr.2024</h2>
                <h2
                className={`Giganci${Giganci ? 'hovered' : ''}`}
                onMouseEnter={() => setGiganci(true)}
                onMouseLeave={() => setGiganci(false)}
                >feb.2024/Presente</h2>
                <h2>ene.2024</h2>
                <h2>jul.2023/dic.2023</h2>
                <h2>may.2022/dic.2023</h2>
            </div>
        </div>
    )
}