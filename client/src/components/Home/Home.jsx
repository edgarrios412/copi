import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Rectangle,
  Tooltip
} from "react-leaflet";
import myIcon from "./Iconos"
import style from "./Home.module.css"
// import "../../App.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useState, useEffect, useRef } from "react";

// MEASURE PARA MEDIR DISTANCIA
// import 'leaflet-measure/dist/leaflet-measure.css';
// import 'leaflet-measure/dist/leaflet-measure';

const MAP_LAYER_ATTRIBUTION =
  "&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors";
const MAP_LAYER_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

function Home() {
  const [zoom, setZoom] = useState(15)
  const [coord, setCoord] = useState([5.0267284, -74.0093039]);
  const mapRef= useRef()
  const [travels, setTravels] = useState([])

  function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click: (e) => {
        setPosition(e.latlng)
        setTravels([...travels, e.latlng])
        // map.flyTo(coord, 18)
      },
    })
    return position === null ? null : (
      <Marker position={position}>
        <Tooltip>Tooltip for Marker</Tooltip>
        <Popup>You are here</Popup>
      </Marker>
    )
  }
  return (
    <div>
      {/* <button className={style.findMe} onClick={() => mapRef.current.flyTo(coord, 16)}>Donde estoy</button> */}
    <div className={style.mapContainer}>
      <MapContainer
        ref={mapRef}
        center={coord}
        zoom={zoom}
        scrollWheelZoom={false}
        className={style.map}
      >
        <TileLayer url={MAP_LAYER_URL} attribution={MAP_LAYER_ATTRIBUTION}/>
        <Marker draggable={true} position={[5.0267284, -74.0093039]} icon={myIcon}>
          <Popup>
            <div>Voy hasta acá</div>
          </Popup>
          </Marker>
        {travels.map((p,i) => { return(<Marker key={p} position={p}>
        <Popup>Viaje #{i}</Popup>
      </Marker>)})}
      <LocationMarker/>
      </MapContainer>
    </div>
    </div>
  );
}

export default Home;
