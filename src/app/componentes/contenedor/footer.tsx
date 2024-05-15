import logoblanco from "../../../assets/img/logo_blanco.png";
import "../../../css/Inicio.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="containerPrincipal">
          <div className="row">
            <div className="columna columna-25 columna-mobile-100">
              <img src={logoblanco} className="logo-footer" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                libero nibh, aliquam ve
                
              </p>
            </div>

            <div className="columna columna-25 columna-mobile-100">
              <h3>Temas relacionados</h3>
              <ul>
                <li>
                  <a href="#">Tema 1</a>
                </li>

                <li>
                  <a href="#">Tema 2</a>
                </li>

                <li>
                  <a href="#">Tema 3</a>
                </li>
              </ul>
            </div>

            <div className="columna columna-25 columna-mobile-100">
              <h3>Datos de contacto</h3>
              <ul>
                <li>jesusdavidquin@gmail.com</li>

                <li>+57 3203125744</li>

                <li>Calle 62 #47-51 Barranquilla-Atlantico Colombia</li>
              </ul>
            </div>

            <div className="columna columna-25 columna-mobile-100">
              <h3>Redes sociales</h3>
              <ul className="redes">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="barra-footer">&copy; Derechos Reservados - 2024</div>
      </footer>
    </>
  );
};
