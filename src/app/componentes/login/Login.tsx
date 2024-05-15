import "../../../css/Login.css";

export const Login = () => {
  return (
    <>
      <div className="contenedor_principal">
        <div className="main">
          <div className="container a-container" id="a-container">
            <form className="form" id="a-form" method="" action="">
              <h2 className="form_title title">Crear cuenta</h2>
              <div className="form__icons">
                <img className="form__icon" alt="" />
              </div>
              <span className="form__span"> use su email para registrarse</span>
              <input className="form__input" type="text" placeholder="Nombre" />
              <input className="form__input" type="text" placeholder="Email" />
              <input
                className="form__input"
                type="password"
                placeholder="Contraseña"
              />
              <button className="form__button button submit">Registrase</button>
            </form>
          </div>
          <div className="container b-container" id="b-container">
            <form className="form" id="b-form" method="" action="">
              <h2 className="form_title title">Entrar</h2>
              <div className="form__icons">
                <img className="form__icon" alt="" />
              </div>
              <span className="form__span">use su email para ingresar</span>
              <input className="form__input" type="text" placeholder="Email" />
              <input
                className="form__input"
                type="password"
                placeholder="Password"
              />
              <a className="form__link">olvidaste tu contraseña?</a>
              <button className="form__button button submit">Ingresar</button>
            </form>
          </div>
          <div className="switch" id="switch-cnt">
            <div className="switch__circle"></div>
            <div className="switch__circle switch__circle--t"></div>
            <div className="switch__container" id="switch-c1">
              <h2 className="switch__title title">Hola de vuelta!</h2>
              <p className="switch__description description">
              Para mantenerse conectado con nosotros, inicie sesión con su información personal
              </p>
              <button className="switch__button button switch-btn">
                Ingresar
              </button>
            </div>
            <div className="switch__container is-hidden" id="switch-c2">
              <h2 className="switch__title title">Hello Friend !</h2>
              <p className="switch__description description">
                 Introduce tus datos personales y comienza tu viaje con nosotros
              </p>
              <button className="switch__button button switch-btn">
               Ingresar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
