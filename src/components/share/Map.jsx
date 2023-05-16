import {useEffect} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {TileLayer, useMap} from "react-leaflet";
import {Box} from "@mui/system";

const Map = () => {
    const map = useMap();
    useEffect(() => {
        map.locate().on("locationfound", (e) => {
            console.log(e.latlng);
            map.flyTo(e.latlng, 16);
        })
    }, [])
    return (
        <>
            <TileLayer
                url="https://api.mapbox.com/styles/v1/sepidehtadayon/ckytn288a000814llavgwz2ys/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2VwaWRlaHRhZGF5b24iLCJhIjoiY2t5dG16Yzh1MGdhdTJ4bzhqa2N5aXhuZCJ9.RF8Hc0pbIBQygcPtSkXVOA"
            />
            <Box
                sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                zIndex: 999,
                transform : 'translate( -55% , -50%)'
            }}>
                <LocationOnIcon sx={{fontSize : '45px'}} color={'primary'}
                />
            </Box>
        </>
    )
}

export default Map;