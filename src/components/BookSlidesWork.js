import React, { useRef, useEffect, useCallback } from "react";
import { ReactComponent as FlechaIzquierda } from "../assets/images/iconmonstr-angel-left-thin.svg";
import { ReactComponent as FlechaDerecha } from "../assets/images/iconmonstr-angel-right-thin.svg";
import styled from "styled-components";

const BookSlidesWork = ({
  children,
  controles = false,
  autoplay = false,
  velocidad = "500",
  intervalo = "5000",
}) => {
  const slideshow = useRef(null);
  const intervaloSlideshow = useRef(null);

  const siguiente = useCallback(() => {
    // Comprobamos que el slideshow tenga elementos
    if (slideshow.current.children.length > 0) {
      console.log("Siguiente");

      // Obtenemos el primer elemento del slideshow.
      const primerElemento = slideshow.current.children[0];

      // Establecemos la transicion para el slideshow.
      slideshow.current.style.transition = `${velocidad}ms ease-out all`;

      const tamañoSlide = slideshow.current.children[0].offsetWidth;

      // Movemos el slideshow
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      const transicion = () => {
        // Reiniciamos la posicion del Slideshow.
        slideshow.current.style.transition = "none";
        slideshow.current.style.transform = `translateX(0)`;

        // Tomamos el primer elemento y lo mandamos al final.
        slideshow.current.appendChild(primerElemento);

        slideshow.current.removeEventListener("transitionend", transicion);
      };

      // Eventlistener para cuando termina la animacion.
      slideshow.current.addEventListener("transitionend", transicion);
    }
  }, [velocidad]);

  const anterior = () => {
    console.log("Anterior");
    if (slideshow.current.children.length > 0) {
      // Obtenemos el ultimo elemento del slideshow.
      const index = slideshow.current.children.length - 1;
      const ultimoElemento = slideshow.current.children[index];
      slideshow.current.insertBefore(
        ultimoElemento,
        slideshow.current.firstChild
      );

      slideshow.current.style.transition = "none";
      const tamañoSlide = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = `${velocidad}ms ease-out all`;
        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  useEffect(() => {
    if (autoplay) {
      intervaloSlideshow.current = setInterval(() => {
        siguiente();
      }, intervalo);

      // Eliminamos los intervalos
      slideshow.current.addEventListener("mouseenter", () => {
        clearInterval(intervaloSlideshow.current);
      });

      // Volvemos a poner el intervalo cuando saquen el cursor del slideshow
      slideshow.current.addEventListener("mouseleave", () => {
        intervaloSlideshow.current = setInterval(() => {
          siguiente();
        }, intervalo);
      });
    }
  }, [autoplay, intervalo, siguiente]);

  return (
    <ContenedorPrincipal>
      <ContenedorSlideshow ref={slideshow}>{children}</ContenedorSlideshow>
      {controles && (
        <Controles>
          <Boton onClick={anterior}>
            <FlechaIzquierda />
          </Boton>
          <Boton derecho onClick={siguiente}>
            <FlechaDerecha />
          </Boton>
        </Controles>
      )}
    </ContenedorPrincipal>
  );
};

const ContenedorPrincipal = styled.div`
  position: relative;
  margin: 1rem auto;
  max-width: 100%;
  min-width: 50%;
  overflow: hidden;
`;

const ContenedorSlideshow = styled.div`
  display: flex;
  flex-wrap: row wrap;
  
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100%;
  transition: 0.4s ease all;
  z-index: 10;
  max-height: 500px;
  overflow: hidden;

  @media screen and (min-width: 1200px) {
  display: flex;
  justify-content: center;
  min-width: 25%;
  transition: 0.4s ease all;
  z-index: 10;
  max-height: 500px;
  overflow: hidden;
  }

  @media screen and (min-width: 900px) and (max-width: 1200px) {

   display: flex;
  justify-content: center;
  min-width: 32%;
  transition: 0.4s ease all;
  z-index: 10;
  max-height: 500px;
  overflow: hidden;
  }

  @media screen and (min-width: 786px) and (max-width: 900px) {
    display: flex;
    justify-content: center;
    min-width: 50%;
    transition: 0.4s ease all;
    z-index: 10;
    max-height: 500px;
    overflow: hidden;
    }
  }

`;

const Controles = styled.div`
  position: absolute;
  top: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Boton = styled.button`
  pointer-events: all;
  margin-top: 0;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  width: 50px;
  height: 100%;
  text-align: center;
  position: absolute;
  transition: 0.3s ease all;
  /* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */

  path {
    filter: ${(props) =>
      props.derecho
        ? "drop-shadow(-2px 0px 0px #ffF)"
        : "drop-shadow(2px 0px 0px #fff)"};
  }

  ${(props) => (props.derecho ? "right: 0" : "left: 0")}
`;

export { BookSlidesWork, Slide };
