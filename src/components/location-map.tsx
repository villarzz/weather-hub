import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function LocationMap({ cordx, cordy }: { cordx: number, cordy: number }) {
    const hyderabadCoords: [number, number] = [cordx, cordy];

    function ChangeMapView({ coords }: { coords: [number, number] }) {
        const map = useMap();
        map.setView(coords, map.getZoom());
        return null;
    }

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg p-0 h-[400px] w-full">
            <MapContainer
                center={hyderabadCoords}
                zoom={15}
                style={{ height: "100%", width: "100%" }}
                className="rounded-xl"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={hyderabadCoords}>
                    <Popup>Hyderabad - Heavy Rain</Popup>
                </Marker>

                <ChangeMapView coords={hyderabadCoords} />
            </MapContainer>
        </div>
    )
}