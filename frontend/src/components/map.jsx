import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Убираем ошибку отображения маркеров
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const greenIcon = new L.Icon({
  iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const locations = [
  { name: "Copenhagen Coffee Lab", coords: [43.6958079267768, 7.2607876537437335] },
  { name: "Umi Cafe", coords: [43.7006307292048, 7.256426805547084] },
  { name: "Maison Armand", coords: [43.69984301748165, 7.255913313511652] },
  { name: "Malongo", coords: [43.70367822826726, 7.265814966327812] },
];

export default function Map() {
  return (
    <div className="w-[588px] h-[432px]  rounded-3xl overflow-hidden shadow-md z-0">
      <MapContainer center={[43.70018608260303, 7.261404645369542]} zoom={15} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=xFfbZDJkVE5nmAvA2Ber"
        />
        {locations.map((loc, idx) => (
          <Marker key={idx} position={loc.coords} icon={greenIcon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
