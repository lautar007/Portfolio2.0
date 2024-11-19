import plasticoLogo from '../images/LogoPlastico.png';
import CGLogo from '../images/CGLogo.jpg';
import EXPLogo from '../images/expressioncloud_logo.jpg';
import CHLogo from '../images/CHLogo.jpg';
import DHLogo from '../images/DHLogo.png';
import HenryLogo from '../images/HenryLogo.png';
import IGALogo from '../images/IGALogo.png';
import UNCLogo from '../images/UNCLogo.jpg'

export const getWorksES = () =>{
    return [
    {
        titulo: "Plástico Estudio - sitio web v2.0.0",
        logo: plasticoLogo,
        class: "PV2",
        date: "mar.2024/abr.2024",
        body: "Rediseño de un sitio web portfolio para estudio fotográfico. Se comenzó desde una versión anterior, con una estructura ya definida. Se mejoró el sistema de persistencia de datos, utilizando una base de datos no relacional (MongoDB). Se modernizó el diseño del sitio dándole más minimalismo y haciendo más dinámica la navegación entre páginas. El stack utilizado fue MERN."
    },
    {
        titulo: "Coding Giants España - Profesor de programación",
        logo: CGLogo,
        class: "CG",
        date: "feb.2024/jun.2024",
        body: "Cursos de programación, individuales o de grupos reducidos, para adolescentes y niños. La empresa ofrece cursos donde se enseña lenguajes como Python o C# de forma didáctica con la inclusión de plataformas y videojuegos como Scratch, Minecraft y Roblox. Mi tarea consistía en impartir clases sobre bases de lenguaje de programación."
    },
    {
        titulo: "Expresia Canadá - Automatización de sitio web",
        logo: EXPLogo,
        class: "EXP",
        date: "ene.2024",
        body: "La empresa ofrece sitios web personalizables que se pueden editar sin código. Para ello, mi tarea consisitió en utilizar el sistema de expresia para hacer que la edición no-code (programación visual) impacte correctamente en el código del sitio, automatizándolo. Este trabajo requirió aprender la documentación para comprender el funcionamiento de la plataforma y su API."
    },
    {
        titulo: "Coder House Argentina - Profesor de porgramación Backend",
        logo: CHLogo,
        class: "CH",
        date: "jul.2023/dic.2023",
        body:"Fui profesor ayudante en un curso de programación orientada al BackEnd. Enseñamos a fondo como se estructura un servidor, el manejo de bases de datos no relacionales (MongoDB), patrones de diseño en para back-end, métodos de autenticación y autorización, encriptación de datos sensibles, Comunicación cliente-servidor con Websocket y librerías para testing entre otras cosas."
    },
    {
        titulo: "Digital House Argentina - Profesor de programación FullStack",
        logo: DHLogo,
        class: "DH",
        date: "may.2022/dic.2023",
        body:"Fui profesor titular en un curso de programación Fullstack. Al principio solo me encargaba de unas pequeñas clases de ingreso a la academia, pero luego de un tiempo logré impartir el curso semestral. Enseñé en profundidad el lenguaje de JavaScript cómo se estructura un servidor, utilizando base de datos relacionales (MySQL) y cómo controlar el Front a través del patrón MVC y React."
    },
    {
        titulo: "Plástico Estudio - sitio web v1.0.0",
        logo:plasticoLogo,
        class: "PV1",
        date: "ene.2022/may.2022",
        body: "Creación de un sitio web portfolio para estudio fotográfico. Creé un servidor que controlaba los datos mediante una base de datos relacional (PostgreSQL) desplegada en la plataforma Heroku. El front fue diseñado con React y desplegado a través de la plataforma Vercel. Se adquirió el dominio 'plasticoestudio.com.ar' y logré conectar el servidor con dicho dominio. Lamentablemente, la plataforma Heroku se volvió paga, lo que obligó a rediseñar la persistencia de los datos."
    },
    {
        titulo: "Academia Soy Henry Argentina - Educación: Desarrollador FullStack",
        logo: HenryLogo,
        class: "Henry",
        date: "jul.2021/dic.2021",
        body: "Aprendí la mayor parte de lo que se de programación gracias a Soy Henry. Estudié en esta academia tras la pandemia y comencé a adentrarme en el lenguaje de JavaScript. Aprendí tanto BackEnd: servidores con Express y base de datos relacional (PostgreSQL); como FrontEnd, utilizando React junto con Redux. Se trabajó en proyectos grupales utilizando metodologías ágiles (SCRUM)." 
    },
    {
        titulo: "Instituto Gastronómico de las Américas - Educación: Bartender Profesional",
        logo: IGALogo,
        class: "IGA",
        date: "ene.2020/mar.2020",
        body: "Tras recibirme como técnico audiovisual, cayó la pandemia, por lo que consideré oportuno tener una profesión que me dé opciones en casos de emergencia. Es por eso que decidí tomar un curso de coctelería profesional, porque es un trabajo siempre necesario y que se puede conseguir con relativa facilidad en cualquier lugar."
    },
    {
        titulo: "Universidad Nacional de Córdoba - Educación: Técnico productor de Medios Audiovisuales",
        logo: UNCLogo,
        class: "UNC",
        date: "mar.2014/nov.2019",
        body: "El cine fue mi primer foco de estudios, mi carrera universitaria. Aprendí todo lo relativo a la creación audiovisual, pero me destaqué como guionista y fotógrafo. Todos mis proyectos y trabajos explotan conocimientos aprendido en esta etapa. Priorizo proyectos que tengan cierta relación con esta faceta profesional que tengo."
    }
]
}

export const getWorksEN = () =>{
    return [
        {
            titulo: "Plástico Estudio - website v2.0.0",
            logo: plasticoLogo,
            class: "PV2",
            date: "mar.2024/apr.2024",
            body: "Redesign of a portfolio website for a photography studio. The work started from a previous version with a defined structure. The data persistence system was improved by using a non-relational database (MongoDB). The design was modernized, making it more minimalist and dynamic for navigation between pages. The stack used was MERN."
        },
        {
            titulo: "Coding Giants Spain - Programming teacher",
            logo: CGLogo,
            class: "CG",
            date: "feb.2024/jun.2024",
            body: "Programming courses, either individual or in small groups, for teenagers and children. The company offers courses teaching languages like Python or C# in a didactic way, including platforms and games such as Scratch, Minecraft, and Roblox. My task was to teach the basics of programming languages."
        },
        {
            titulo: "Expresia Canada - Website automation",
            logo: EXPLogo,
            class: "EXP",
            date: "jan.2024",
            body: "The company offers customizable websites that can be edited without code. My task was to use the Expresia system to ensure that the no-code (visual programming) edits correctly impacted the website's code, automating the process. This work required learning the documentation to understand how the platform and its API function."
        },
        {
            titulo: "Coder House Argentina - Backend programming teacher",
            logo: CHLogo,
            class: "CH",
            date: "jul.2023/dic.2023",
            body: "I was an assistant teacher in a backend-oriented programming course. We taught in-depth how to structure a server, manage non-relational databases (MongoDB), design patterns for the backend, authentication and authorization methods, sensitive data encryption, client-server communication with WebSocket, and testing libraries, among other topics."
        },
        {
            titulo: "Digital House Argentina - FullStack programming teacher",
            logo: DHLogo,
            class: "DH",
            date: "may.2022/dic.2023",
            body: "I was a lead teacher in a FullStack programming course. Initially, I handled small introductory classes for new students, but over time I managed to teach the semester-long course. I taught JavaScript in-depth, how to structure a server using relational databases (MySQL), and how to control the frontend using the MVC pattern and React."
        },
        {
            titulo: "Plástico Estudio - website v1.0.0",
            logo: plasticoLogo,
            class: "PV1",
            date: "jan.2022/may.2022",
            body: "Creation of a portfolio website for a photography studio. I created a server that managed data using a relational database (PostgreSQL) deployed on the Heroku platform. The frontend was designed with React and deployed via Vercel. The domain 'plasticoestudio.com.ar' was acquired, and I successfully connected the server to it. Unfortunately, Heroku became a paid platform, which required redesigning the data persistence system."
        },
        {
            titulo: "Academia Soy Henry Argentina - Education: FullStack Developer",
            logo: HenryLogo,
            class: "Henry",
            date: "jul.2021/dic.2021",
            body: "I learned most of what I know about programming at Soy Henry. I studied at this academy after the pandemic and began delving into JavaScript. I learned both Backend (servers with Express and relational databases like PostgreSQL) and Frontend, using React along with Redux. Group projects were carried out using agile methodologies (SCRUM)."
        },
        {
            titulo: "Instituto Gastronómico de las Américas - Education: Professional Bartender",
            logo: IGALogo,
            class: "IGA",
            date: "jan.2020/mar.2020",
            body: "After graduating as an audiovisual technician, the pandemic hit, so I thought it would be wise to have a profession that offers options in emergencies. That's why I decided to take a professional bartending course, as it's a job that's always in demand and relatively easy to find anywhere."
        },
        {
            titulo: "Universidad Nacional de Córdoba - Education: Media Production Technician",
            logo: UNCLogo,
            class: "UNC",
            date: "mar.2014/nov.2019",
            body: "Film was my first field of study and my university career. I learned everything related to audiovisual creation, but I excelled as a screenwriter and photographer. All my projects and work draw on knowledge gained during this time. I prioritize projects with some connection to this professional facet of mine."
        }
    ];
}
