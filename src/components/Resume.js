import React, { useState } from "react";
import '../styles/Resume.css';
import plasticoLogo from '../images/LogoPlastico.png';
import CGLogo from '../images/CGLogo.jpg';
import EXPLogo from '../images/expressioncloud_logo.jpg';
import CHLogo from '../images/CHLogo.jpg';
import DHLogo from '../images/DHLogo.png';
import HenryLogo from '../images/HenryLogo.png';
import IGALogo from '../images/IGALogo.png';
import UNCLogo from '../images/UNCLogo.jpg'

export default function Resume(){

    //Work content in spanish:
    let worksES = [
        {
            titulo: "Plástico Estudio - sitio web v2.0.0",
            logo: plasticoLogo,
            body: "Rediseño de un sitio web portfolio para estudio fotográfico. Se comenzó desde una versión anterior, con una estructura ya definida. Se mejoró el sistema de persistencia de datos, utilizando una base de datos no relacional (MongoDB). Se modernizó el diseño del sitio dándole más minimalismo y haciendo más dinámica la navegación entre páginas. El stack utilizado fue MERN."
        },
        {
            titulo: "Coding Giants España - Profesor de programación",
            logo: CGLogo,
            body: "Cursos de programación, individuales o de grupos reducidos, para adolescentes y niños. La empresa ofrece cursos donde se enseña lenguajes como Python o C# de forma didáctica con la inclusión de plataformas y videojuegos como Scratch, Minecraft y Roblox. Mi tarea consistía en impartir clases sobre bases de lenguaje de programación."
        },
        {
            titulo: "Expresia Canadá - Automatización de sitio web",
            logo: EXPLogo,
            body: "La empresa ofrece sitios web personalizables que se pueden editar sin código. Para ello, mi tarea consisitió en utilizar el sistema de expresia para hacer que la edición no-code (programación visual) impacte correctamente en el código del sitio, automatizándolo. Este trabajo requirió aprender la documentación para comprender el funcionamiento de la plataforma y su API."
        },
        {
            titulo: "Coder House Argentina - Profesor de porgramación Backend",
            logo: CHLogo,
            body:"Fui profesor ayudante en un curso de programación orientada al BackEnd. Enseñamos a fondo como se estructura un servidor, el manejo de bases de datos no relacionales (MongoDB), patrones de diseño en para back-end, métodos de autenticación y autorización, encriptación de datos sensibles, Comunicación cliente-servidor con Websocket y librerías para testing entre otras cosas."
        },
        {
            titulo: "Digital House Argentina - Profesor de programación FullStack",
            logo: DHLogo,
            body:"Fui profesor titular en un curso de programación Fullstack. Al principio solo me encargaba de unas pequeñas clases de ingreso a la academia, pero luego de un tiempo logré impartir el curso semestral. Enseñé en profundidad el lenguaje de JavaScript cómo se estructura un servidor, utilizando base de datos relacionales (MySQL) y cómo controlar el Front a través del patrón MVC y React."
        },
        {
            titulo: "Plástico Estudio - sitio web v1.0.0",
            logo:plasticoLogo,
            body: "Creación de un sitio web portfolio para estudio fotográfico. Creé un servidor que controlaba los datos mediante una base de datos relacional (PostgreSQL) desplegada en la plataforma Heroku. El front fue diseñado con React y desplegado a través de la plataforma Vercel. Se adquirió el dominio 'plasticoestudio.com.ar' y logré conectar el servidor con dicho dominio. Lamentablemente, la plataforma Heroku se volvió paga, lo que obligó a rediseñar la persistencia de los datos."
        },
        {
            titulo: "Academia Soy Henry Argentina - Educación: Desarrollador FullStack",
            logo: HenryLogo,
            body: "Aprendí la mayor parte de lo que se de programación gracias a Soy Henry. Estudié en esta academia tras la pandemia y comencé a adentrarme en el lenguaje de JavaScript. Aprendí tanto BackEnd: servidores con Express y base de datos relacional (PostgreSQL); como FrontEnd, utilizando React junto con Redux. Se trabajó en proyectos grupales utilizando metodologías ágiles (SCRUM)." 
        },
        {
            titulo: "Instituto Gastronómico de las Américas - Educación: Bartender Profesional",
            logo: IGALogo,
            body: "Tras recibirme como técnico audiovisual, cayó la pandemia, por lo que consideré oportuno tener una profesión que me dé opciones en casos de emergencia. Es por eso que decidí tomar un curso de coctelería profesional, porque es un trabajo siempre necesario y que se puede conseguir con relativa facilidad en cualquier lugar."
        },
        {
            titulo: "Universidad Nacional de Córdoba - Educación: Técnico productor de Medios Audiovisuales",
            logo: UNCLogo,
            body: "El cine fue mi primer foco de estudios, mi carrera universitaria. Aprendí todo lo relativo a la creación audiovisual, pero me destaqué como guionista y fotógrafo. Todos mis proyectos y trabajos explotan conocimientos aprendido en esta etapa. Priorizo proyectos que tengan cierta relación con esta faceta profesional que tengo."
        }
    ]

    //States:
    const [PV2, setPV2] = useState(false);
    const [Giganci, setGiganci] = useState(false);
    const [expresia, setExpresia] = useState(false);
    const [coderHouse, setCoderHouse] = useState(false);
    const [digitalHouse, setDigitalHouse] = useState(false);
    const [PV1, setPV1] = useState(false);
    const [henry, setHenry] = useState(false);
    const [IGA, setIGA] = useState(false);
    const [UNC, setUNC] = useState(false);

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
                    <img className="workLogoPV2" alt="companyLogo" src={worksES[0].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[0].titulo}:</h2>
                        <p className="workBody">{worksES[0].body}</p>
                    </div>
                </div>


                <div 
                className={`workCard${Giganci ? "CGhovered" : ""}`} 
                onMouseEnter={() => setGiganci(true)} 
                onMouseLeave={() => setGiganci(false)}
                >
                    <img className="workLogoGiganci" alt="companyLogo" src={worksES[1].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[1].titulo}:</h2>
                        <p className="workBody">{worksES[1].body}</p>
                    </div>
                </div>


                <div 
                className={`workCard${expresia ? "EXPhovered" : ""}`} 
                onMouseEnter={() => setExpresia(true)} 
                onMouseLeave={() => setExpresia(false)}
                >
                    <img className="workLogoEXP" alt="companyLogo" src={worksES[2].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[2].titulo}:</h2>
                        <p className="workBody">{worksES[2].body}</p>
                    </div>
                </div>


                <div 
                className={`workCard${coderHouse ? "CHhovered" : ""}`} 
                onMouseEnter={() => setCoderHouse(true)} 
                onMouseLeave={() => setCoderHouse(false)}
                >
                    <img className="workLogoCH" alt="companyLogo" src={worksES[3].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[3].titulo}:</h2>
                        <p className="workBody">{worksES[3].body}</p>
                    </div>
                </div>


                <div 
                className={`workCard${digitalHouse ? "DHhovered" : ""}`} 
                onMouseEnter={() => setDigitalHouse(true)} 
                onMouseLeave={() => setDigitalHouse(false)}
                >
                    <img className="workLogoDH" alt="companyLogo" src={worksES[4].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[4].titulo}:</h2>
                        <p className="workBody">{worksES[4].body}</p>
                    </div>
                </div>


                <div 
                className={`workCard${PV1 ? "PV1hovered" : ""}`} 
                onMouseEnter={() => setPV1(true)} 
                onMouseLeave={() => setPV1(false)}
                >
                    <img className="workLogoPV1" alt="companyLogo" src={worksES[5].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[5].titulo}:</h2>
                        <p className="workBody">{worksES[5].body}</p>
                    </div>
                </div>

                <div 
                className={`workCard${henry ? "Henryhovered" : ""}`} 
                onMouseEnter={() => setHenry(true)} 
                onMouseLeave={() => setHenry(false)}
                >
                    <img className="workLogoHenry" alt="companyLogo" src={worksES[6].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[6].titulo}:</h2>
                        <p className="workBody">{worksES[6].body}</p>
                    </div>
                </div>

                <div 
                className={`workCard${IGA ? "IGAhovered" : ""}`} 
                onMouseEnter={() => setIGA(true)} 
                onMouseLeave={() => setIGA(false)}
                >
                    <img className="workLogoIGA" alt="companyLogo" src={worksES[7].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[7].titulo}:</h2>
                        <p className="workBody">{worksES[7].body}</p>
                    </div>
                </div>


                <div 
                className={`workCard${UNC ? "UNChovered" : ""}`} 
                onMouseEnter={() => setUNC(true)} 
                onMouseLeave={() => setUNC(false)}
                >
                    <img className="workLogoUNC" alt="companyLogo" src={worksES[8].logo}/>
                    <div className="workCardContent">
                        <h2 className="workTitle">{worksES[8].titulo}:</h2>
                        <p className="workBody">{worksES[8].body}</p>
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

                <h2
                className={`EXP${expresia? 'hovered' : ''}`}
                onMouseEnter={()=>setExpresia(true)}
                onMouseLeave={()=>setExpresia(false)}
                >ene.2024</h2>

                <h2
                className={`CH${coderHouse ? 'hovered' : ''}`}
                onMouseEnter={()=>setCoderHouse(true)}
                onMouseLeave={()=>setCoderHouse(false)}
                >jul.2023/dic.2023</h2>

                <h2
                className={`DH${digitalHouse ? 'hovered' : ''}`}
                onMouseEnter={()=>setDigitalHouse(true)}
                onMouseLeave={()=>setDigitalHouse(false)}
                >may.2022/dic.2023</h2>

                <h2
                className={`PV1${PV1 ? 'hovered' : ''}`}
                onMouseEnter={()=>setPV1(true)}
                onMouseLeave={()=>setPV1(false)}
                >ene.2022/may.2022</h2>

                <h2
                className={`Henry${henry ? 'hovered' : ''}`}
                onMouseEnter={()=>setHenry(true)}
                onMouseLeave={()=>setHenry(false)}
                >jul.2021/dic.2021</h2>
                
                <h2
                className={`IGA${IGA ? 'hovered' : ''}`}
                onMouseEnter={()=>setIGA(true)}
                onMouseLeave={()=>setIGA(false)}
                >ene.2020/mar.2020</h2>

                <h2
                className={`UNC${UNC ? 'hovered' : ''}`}
                onMouseEnter={()=>setUNC(true)}
                onMouseLeave={()=>setUNC(false)}
                >mar.2014/nov.2019</h2>
            </div>
        </div>
    )
}