import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { Login } from "../../componentes/login/Login";
import { Servicio } from "../../componentes/servicios/Servicio";




export const Ruteo= ()=>{

    return(
        <Routes>
            <Route  path="/" element={<Inicio/>}/>
            
            
            
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/servicio" element={<Servicio/>}/>
            
        </Routes>
        
    );

};
