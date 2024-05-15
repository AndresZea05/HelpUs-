import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Ruteo } from "./app/utilidades/rutas/Rutas";
import { Cabecera } from "./app/componentes/contenedor/Cabecera";
import { Footer } from "./app/componentes/contenedor/footer";


function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
          <Cabecera />
          <Ruteo />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
