import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import { useEffect } from "react";

interface MapProps {
  center: [number, number];
  onCenterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Map: React.FC<MapProps> = ({ center, onCenterChange }) => {
  return (
    <MapContainer
      style={{ height: "500px" }}
      center={center}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>Una breve descripcion</Popup>
      </Marker>
      <MapEvents center={center} />
    </MapContainer>
  );
};

const MapEvents: React.FC<{ center: [number, number] }> = ({ center }) => {
  const map = useMapEvent("moveend", () => {
    // Aquí puedes realizar alguna acción después de que el mapa cambie de posición
  });

  useEffect(() => {
    if (map) {
      map.setView(center);
    }
  }, [map, center]);

  return null;
};

export default Map;