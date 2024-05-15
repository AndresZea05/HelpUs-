import { useState } from 'react';
import Map from './Maps';
import '../../../css/Servicio.css';

export const Servicio = () => {
  const [center, setCenter] = useState<[number, number]>([10.994360364475032, -74.790640111464]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case 'unicuc':
        setCenter([10.994360364475032, -74.790640111464]);
        break;
        case 'uninorte':
        setCenter([11.0191085168354, -74.85114239964439]);
        break;
        case 'uniatlantico':
        setCenter([11.01962225540215, -74.87345166222372]);
        break;
        case 'unilibre':
        setCenter([10.988669438921363, -74.78858479109316]);
        break;
        case 'unilsimon':
        setCenter([10.994596463617176, -74.7919150469129]);
        break;
      case 'uniameri':
        setCenter([10.991433777401259, -74.80706694691298]);
        break;
        case 'unicul':
        setCenter([10.994823935839403, -74.79110666225696]);
        break;
        case 'cooritsa':
        setCenter([10.98668975015035, -74.78765726225708]);
        break;
        case 'coorsena':
          setCenter([10.994393298638252, -74.80783647436333]);
          break;
      // Agrega más casos para las demás opciones
      default:
        break;
    }
  };

  return (
    <>
      <div className="ContainerServicios">
        <div className="titulop">
          <h1>¿Estas buscando alojamiento?</h1>
        </div>
        <div className="buscaropciones">
          <h3>Selecciona una Universidad o coorporacion de Barranquilla:</h3>
          <select id="universidades" onChange={handleSelectChange}>
            <option value="unicuc">Universidad de la Costa (CUC)</option>
            <option value="uninorte">Universidad del Norte</option>
            <option value="uniatlantico">Universidad del Atlántico(Puerto)</option>
            <option value="unilibre">Universidad Libre</option>
            <option value="unilsimon">Universidad Simon Bolivar</option>
            <option value="uniameri">Universidad Americana</option>
            <option value="unicul">Universidad Latinoamericana(CUL)</option>
            <option value="cooritsa">Coorporacion ITSA</option>
            <option value="coorsena">Coorporacion SENA</option>
          </select>
        </div>
        <div className="mapcontainerprin">
          <div className="mapacontainer">
            <Map center={center} onCenterChange={handleSelectChange} />
          </div>
        </div>
        <br />
      </div>
    </>
  );
};