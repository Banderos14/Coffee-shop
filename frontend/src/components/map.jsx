import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";

// 🔑 Подставь свой токен
mapboxgl.accessToken = 'pk.eyJ1IjoiYmFuZGVyb3MiLCJhIjoiY21kcjVxdWlzMGQ1MDJqc2FrYzEzMnpibCJ9.CL4YYqgJ94NlC7amzRGLfg';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  // Координаты точек:
  const locations = [
  { lng: 7.256360, lat: 43.695219, label: '47 Rue de France' },
  { lng: 7.261852, lat: 43.707341, label: '2 Rue Amiral de Grasse' },
  { lng: 7.259372, lat: 43.701257, label: '3 Pl. Franklin' },
  { lng: 7.266358, lat: 43.701501, label: '39 Av. Jean Médecin' }
];

  useEffect(() => {
    if (map.current) return; // уже инициализирована

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [7.262332500885002, 43.70004560840009], // центр карты (Ницца)
      zoom: 14
    });

    // Добавить точки
    locations.forEach(loc => {
      new mapboxgl.Marker()
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new mapboxgl.Popup().setText(loc.label)) // Подпись
        .addTo(map.current);
    });

    // Добавить маркер для каждой точки
    locations.forEach((loc) => {
      new mapboxgl.Marker()
        .setLngLat([loc.lng, loc.lat])
        .setPopup(new mapboxgl.Popup().setText(loc.label))
        .addTo(map.current);
    });


  }, []);

  return (
    <div ref={mapContainer} className="w-[588px] h-[444px] rounded-xl shadow-md" />
  );
};

export default Map;
