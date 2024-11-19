import React from "react";
import photo from "../images/pesonalPhoto.jpeg";
import '../styles/About.css';

export default function About(){
    const lenguage = localStorage.getItem("lenguage") || "ESP";

    return (
      <div>
        {lenguage === "ESP" ? (
          <h1 className="proyect-title">Sobre mí.</h1>
        ) : (
          <h1 className="proyect-title">About mE.</h1>
        )}
        <hr className="top-separator" />
        <div className="aboutAndPhoto">
          <img src={photo} className="personal-photo" />
          {lenguage === "ESP" ? (
            <div className="about-content">
              <p>
                Mi nombre es Lautaro. Nací en Corrientes Capital, Argentina. Soy
                una persona interesada en el arte. Soy escritor, fotógrafo,
                guionista, he incursionado en el cine y también soy músico.{" "}
              </p>
              <p>
                En el año 2020, la pandemia me obligó a seguir avanzando en la
                búsqueda de oficios que me gusten y con los que pueda
                sustentarme. Así es que en ese año estudié sobre coctelería y me
                convertí en un bartender profesional. Hasta el día de hoy ese
                sigue siendo mi segundo oficio.{" "}
              </p>
              <p>
                Pero pocos años después me comencé a interesar por el mundo de
                las criptomonedas y eso me acercó hacia la programación.{" "}
              </p>
              <p>
                Descubrí que es un mundo fascinante, que promete un buen pasar
                económico y que representa una industria transversal a todas las
                demás. Pero también es un camino lleno de frustraciones en donde
                destacar requiere de estudio y prácticas constantes.{" "}
              </p>
              <p>
                Creo que el valor que más me define, en ese sentido, es mi
                constancia y resiliencia. Todos los días aprendo algo nuevo y
                todos los días practico lo que aprendo.{" "}
              </p>
              <p>
                Mi sueño es encontrar una ocupación en la que pueda explotar mi
                lado artístico y mi lado lógico. Por eso me inclino en el futuro
                a desarrollar videojuegos u otros contenidos audiovisuales que
                tengan que ver con la tecnología, como la realidad aumentada o
                virtual.{" "}
              </p>
              <p>
                En el camino, cualquier experiencia enriquecedora me sirve y
                será realizada con entusiasmo y responsabilidad. Eso es lo que
                ofrezco.
              </p>
            </div>
          ) : (
            <div className="about-content">
              <p>
                My name is Lautaro. I was born in Corrientes Capital, Argentina.
                I am a person interested in art. I am a writer, photographer,
                screenwriter, I have dabbled in film, and I am also a musician.
              </p>
              <p>
                In 2020, the pandemic forced me to continue searching for trades
                I enjoy and that I can sustain myself with. That’s when I
                studied mixology and became a professional bartender. To this
                day, that remains my second profession.
              </p>
              <p>
                But a few years later, I became interested in the world of
                cryptocurrencies, which led me to programming.
              </p>
              <p>
                I discovered that it is a fascinating world, one that promises a
                good economic future and represents an industry that is
                transversal to all others. But it is also a path full of
                frustrations, where standing out requires constant study and
                practice.
              </p>
              <p>
                I believe that the value that defines me the most, in this
                sense, is my perseverance and resilience. Every day I learn
                something new, and every day I practice what I learn.
              </p>
              <p>
                My dream is to find a job where I can exploit both my artistic
                and logical sides. That’s why I am inclined in the future to
                develop video games or other audiovisual content related to
                technology, such as augmented or virtual reality.
              </p>
              <p>
                Along the way, any enriching experience will help me, and it
                will be done with enthusiasm and responsibility. That’s what I
                offer.
              </p>
            </div>
          )}
        </div>
      </div>
    );
}