import "../../../css/Cabecera.css"
import { NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo_blanco.png";
import { Button } from "react-bootstrap";

export const Cabecera = () => {
  return (
    <>
      <header className="cabecera">
        <div className="cabecera__logo">
          <img src={logo} alt="Logo" />
          <div className="nombrelogo">
            <p>HELP US!</p>
          </div>
        </div>

        <nav className="cabecera__nav">
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/servicio">Servicio</NavLink>
            </li>
            <li>
              {" "}
              <button className="btn_login">
                <NavLink id="dentroboton" to="/login">
                  Ingresar/Registrar
                </NavLink>
              </button>{" "}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
