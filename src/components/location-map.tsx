import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function LocationMap({cordx, cordy}: {cordx: number, cordy: number}) {
    const hyderabadCoords: [number, number] = [cordx, cordy];

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg p-0 h-[400px] w-[700px]">
            <MapContainer
                center={hyderabadCoords}
                zoom={14}
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
            </MapContainer>
        </div>
    )
}