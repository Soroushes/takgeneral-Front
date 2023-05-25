import {useEffect} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {TileLayer, useMap} from "react-leaflet";
import {Box} from "@mui/system";
const MapControl = () => {
    const map = useMap();
    useEffect(() => {
        map.locate().on("locationfound", (e) => {
            map.flyTo(e.latlng, 16);
        })
    }, [])
    return (
        <>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Box
                sx={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    zIndex: 999,
                    transform: 'translate( -55% , -50%)'
                }}>
                <LocationOnIcon sx={{fontSize: '45px'}} color={'primary'}
                />
            </Box>
        </>
    )
}

export default MapControl;