import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";

const MapShowDetails = () => {
    const position = [51.505, -0.09]
    return (
        <MapContainer
            attributionControl={false}
            zoomControl={false}
            style={{
                width: "100%",
                zIndex: "10",
                height: "100%",
                position: "relative",
                borderRadius : "8px"
            }}
            center={position} zoom={18} scrollWheelZoom={false}>
            <TileLayer
                url="https://api.mapbox.com/styles/v1/sepidehtadayon/ckytn288a000814llavgwz2ys/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2VwaWRlaHRhZGF5b24iLCJhIjoiY2t5dG16Yzh1MGdhdTJ4bzhqa2N5aXhuZCJ9.RF8Hc0pbIBQygcPtSkXVOA"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br/> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}
export default MapShowDetails;