import pexels from "../../../assets/imgInicio/pexels-fauxels-3184418.jpg";
import banner_claro from "../../../assets/imgInicio/Banner_Claro.png";
import banner_oscuro from "../../../assets/imgInicio/Banner_Oscuro.png";
import mision from "../../../assets/imgInicio/Misión.jpg";
import Fotos_muestras_1 from "../../../assets/imgInicio/Fotos_muestras_1.jpg";
import Fotos_muestras_4 from "../../../assets/imgInicio/Fotos_muestra_4.jpg";
import Fotos_muestras_3 from "../../../assets/imgInicio/Fotos_muestra_3.jpg";
import Fotos_muestras_5 from "../../../assets/imgInicio/Fotos_muestras_1.jpg";
import Fotos_muestras_2 from "../../../assets/imgInicio/Fotos_muestra_2.jpg";
import Fotos_muestras_6 from "../../../assets/imgInicio/Fotos_muestra_6.jpg";
import servicio2 from "../../../assets/imgInicio/Fotos_muestra_3.jpg";
import visión from "../../../assets/imgInicio/Visión.jpg";

import "../../../css/Inicio.css"
export const Inicio = () => {
  return (
    <>
      <div className="contenedorP">
        <main>
          <section id="inicio">
            <img src={pexels} />

            <div className="bloque-inicio">
              <h1>Bienvenidos a</h1>
              <h1 className="paytone">Help Us!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                libero nibh, aliquam vel consectetur maximus, elementum eu
                neque. Integer hendrerit fringilla est vel maximus. Nam vel
                porta leo.
              </p>
              <a href="#nosotros" className="boton boton-rojo">
                Ver más
              </a>
            </div>
          </section>

          <div className="Carousel">
            <h2>GALERIA</h2>
            <div className="slick-list" id="slick-list">
              <button
                className="slick-arrow slick-prev"
                id="button-prev"
                data-button="button-prev"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-left"
                  className="svg-inline--fa fa-chevron-left fa-w-10"
                  role="../../../assets/imgInicio"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
                  ></path>
                </svg>
              </button>
              <div className="slick-track" id="track">
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_claro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_oscuro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_claro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_oscuro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_claro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_oscuro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_claro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_oscuro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_claro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
                <div className="slick">
                  <div>
                    <a href="/">
                      <h4>
                        <small>Share Your Message</small>Watch
                      </h4>
                      <picture>
                        <img src={banner_oscuro} alt="Image" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <button
                className="slick-arrow slick-next"
                id="button-next"
                data-button="button-next"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="chevron-right"
                  className="svg-inline--fa fa-chevron-right fa-w-10"
                  role="../../../assets/imgInicio"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <section id="nosotros" className="seccion">
            <div className="containerPrincipal" id="acercade">
              <h1>Acerca de nosotros</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                libero nibh, aliquam vel consectetur maximus, elementum eu
                neque. Integer hendrerit fringilla est vel maximus. Nam vel
                porta leo.
              </p>
            </div>
          </section>

          <section id="servicios" className="seccion">
            <div className="containerPrincipal">
              <div className="row">
                <div className="columna columna-33 columna-mobile-100">
                  <div className="bloque-servicio">
                    <div className="bloque-img-servicio cuadrado-perfecto">
                      <img src={mision} />
                    </div>
                    <div className="bloque-contenido-servicio">
                      <h3>Mision</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero nibh, aliquam vel consectetur maximus,
                        elementum eu neque. Integer hendrerit fringilla est vel
                        maximus. Nam vel porta leo.
                      </p>
                      <a href="#" className="boton boton-blanco">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>

                <div className="columna columna-33 columna-mobile-100">
                  <div className="bloque-servicio">
                    <div className="bloque-img-servicio cuadrado-perfecto">
                      <img src={servicio2} />
                    </div>
                    <div className="bloque-contenido-servicio">
                      <h3>Servicio 2</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero nibh, aliquam vel consectetur maximus,
                        elementum eu neque. Integer hendrerit fringilla est vel
                        maximus. Nam vel porta leo.
                      </p>
                      <a href="#" className="boton boton-blanco">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>

                <div className="columna columna-33 columna-mobile-100">
                  <div className="bloque-servicio">
                    <div className="bloque-img-servicio cuadrado-perfecto">
                      <img src={visión} />
                    </div>
                    <div className="bloque-contenido-servicio">
                      <h3>Vision</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec libero nibh, aliquam vel consectetur maximus,
                        elementum eu neque. Integer hendrerit fringilla est vel
                        maximus. Nam vel porta leo.
                      </p>
                      <a href="#" className="boton boton-blanco">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="nosotros" className="seccion">
            <div className="containerPrincipal" id="acercade">
              <h1>Nuestra historia</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                libero nibh, aliquam vel consectetur maximus, elementum eu
                neque. Integer hendrerit fringilla est vel maximus. Nam vel
                porta leo.
              </p>
            </div>
          </section>

          <section id="galeria">
            <div className="containerPrincipal-fluid">
              <div className="row">
                <div className="columna-33 columna-mobile-50">
                  <div className="cuadrado-perfecto">
                    <img src={Fotos_muestras_1} />
                    <h4>Imagen1</h4>
                  </div>
                </div>

                <div className="columna-33 columna-mobile-50">
                  <div className="cuadrado-perfecto">
                    <img src={Fotos_muestras_4} />
                    <h4>Imagen2</h4>
                  </div>
                </div>

                <div className="columna-33 columna-mobile-50">
                  <div className="cuadrado-perfecto">
                    <img src={Fotos_muestras_3} />
                    <h4>Imagen3</h4>
                  </div>
                </div>

                <div className="columna-33 columna-mobile-50">
                  <div className="cuadrado-perfecto">
                    <img src={Fotos_muestras_5} />
                    <h4>Imagen4</h4>
                  </div>
                </div>

                <div className="columna-33 columna-mobile-50">
                  <div className="cuadrado-perfecto">
                    <img src={Fotos_muestras_2} />
                    <h4>Imagen5</h4>
                  </div>
                </div>

                <div className="columna-33 columna-mobile-50">
                  <div className="cuadrado-perfecto">
                    <img src={Fotos_muestras_6} />
                    <h4>Imagen6</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contactenos" className="seccion">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120001.94190536869!2d-74.78582682939414!3d10.973478874295722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1712594236544!5m2!1ses-419!2sco"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
            <div className="containerPrincipal-fluid">
              <div className="row">
                <div className="columna columna-41 columna-mobile-100 empujar-58 empujar-mobile-0 sinpadding-mobile">
                  <form action="#" method="post">
                    <div className="form-block">
                      <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre"
                      />
                    </div>

                    <div className="form-block">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-block">
                      <textarea name="mensaje" placeholder="Mensaje"></textarea>
                    </div>

                    <div className="form-block bloque-ultimo">
                      <input
                        type="submit"
                        className="boton boton-negro"
                        value="Enviar"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
